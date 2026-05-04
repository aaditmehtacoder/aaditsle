"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { questions, sleRounds } from "@/lib/quiz-data";
import CircularTimer from "@/components/CircularTimer";
import AnimatedScore from "@/components/AnimatedScore";
import { createClient } from "@/utils/supabase/client";
import { calculateQuestionPoints, COUNTDOWN_SECONDS, countdownLeftFor, generateClassCode, maxPointsFor, QUESTION_SECONDS, timeLeftFor } from "@/utils/game-logic";
import { Trash2 } from "lucide-react";

type Phase = "lobby" | "welcome" | "countdown" | "question" | "sle" | "leaderboard" | "thanks";
type Player = { id: string; name: string; score: number; joinedAt: number };
type Answer = { id: string; player_id: string; question_index: number; choice: number; correct: boolean };
type GameState = {
  id: string;
  code: string;
  phase: Phase;
  current_question: number;
  revealed: boolean;
  pending_sle_index: number | null;
  question_started_at: number;
  question_count: number;
};

const letters = ["A", "B", "C", "D"];
const confettiColors = ["#6366f1", "#14b8a6", "#f97316", "#ef4444", "#facc15", "#3b82f6"];
const botNames = [
  "Mia", "Leo", "Sofia", "Noah", "Emma", "Eli", "Ava", "Mateo", "Luna", "Owen",
  "Zoe", "Mason", "Nina", "Lucas", "Ella", "Kai", "Ruby", "Miles", "Ivy", "Theo",
  "Grace", "Liam", "Maya", "Jack", "Chloe", "Henry", "Aria", "Logan", "Nora", "Ezra",
  "Layla", "Finn", "Stella", "Caleb", "Jade"
];

export default function HostPage() {
  const [game, setGame] = useState<GameState | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [confetti, setConfetti] = useState<number[]>([]);
  const [joinUrl, setJoinUrl] = useState("");
  const [timeLeft, setTimeLeft] = useState(QUESTION_SECONDS);
  const [hostAuth, setHostAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [kickModal, setKickModal] = useState<{ id: string; name: string } | null>(null);
  const [countdownLeft, setCountdownLeft] = useState(COUNTDOWN_SECONDS);
  const [scoreBaselines, setScoreBaselines] = useState<Record<string, number>>({});
  const [testBotsEnabled, setTestBotsEnabled] = useState(false);
  const botAnswerKeys = useRef(new Set<string>());

  const supabase = useMemo(() => createClient(), []);

  const question = game ? questions[game.current_question] : null;
  const questionMaxPoints = question ? maxPointsFor(question.pointsMultiplier ?? 1) : 1000;
  const sle = game ? sleRounds[game.pending_sle_index ?? 0] : sleRounds[0];
  const rankedPlayers = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players]
  );
  const answerCounts = useMemo(() => {
    const counts = [0, 0, 0, 0];
    if (!game) return counts;
    answers
      .filter(answer => answer.question_index === game.current_question)
      .forEach(answer => {
        if (answer.choice >= 0 && answer.choice <= 3) counts[answer.choice] += 1;
      });
    return counts;
  }, [answers, game?.current_question]);
  const answerNamesByChoice = useMemo(() => {
    const names = [[], [], [], []] as string[][];
    if (!game) return names;

    const playerNames = new Map(players.map(player => [player.id, player.name]));
    answers
      .filter(answer => answer.question_index === game.current_question)
      .forEach(answer => {
        if (answer.choice < 0 || answer.choice > 3) return;
        const playerName = playerNames.get(answer.player_id);
        if (!playerName) return;
        names[answer.choice].push(playerName.replace(/^\p{Emoji_Presentation}\s*/u, "").trim() || playerName);
      });

    return names.map(choiceNames => choiceNames.sort((a, b) => a.localeCompare(b)));
  }, [answers, players, game?.current_question]);
  const playerStreaks = useMemo(() => {
    const streaks: Record<string, number> = {};
    if (!game) return streaks;

    players.forEach(player => {
      let streak = 0;
      for (let questionIndex = game.current_question; questionIndex >= 0; questionIndex -= 1) {
        const answer = answers.find(entry => entry.player_id === player.id && entry.question_index === questionIndex);
        if (!answer || !answer.correct) break;
        streak += 1;
      }
      streaks[player.id] = streak;
    });

    return streaks;
  }, [answers, players, game?.current_question]);
  const currentAnswerTotal = answerCounts.reduce((total, count) => total + count, 0);
  const maxAnswerCount = Math.max(...answerCounts, 1);
  const botCount = players.filter(player => player.id.startsWith("bot_")).length;
  const qrJoinUrl = game && joinUrl ? `${joinUrl}/?code=${encodeURIComponent(game.code)}` : joinUrl;

  useEffect(() => {
    setJoinUrl(window.location.origin);
    initializeGame();
  }, []);

  async function initializeGame() {
    const code = generateClassCode();
    const { data, error } = await supabase.from('games').insert({
      code,
      phase: 'lobby',
      current_question: 0,
      revealed: false,
      pending_sle_index: null,
      question_started_at: Date.now(),
      question_count: questions.length
    } as any).select().single();

    if (data) {
      setGame(data as GameState);
      setPlayers([]);
      setAnswers([]);
    }
  }

  // Real-time subscriptions
  useEffect(() => {
    if (!game) return;

    const channel = supabase
      .channel(`host-${game.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'players', filter: `game_id=eq.${game.id}` }, (payload: any) => {
        const newPlayer = { id: payload.new.id, name: payload.new.name, score: payload.new.score, joinedAt: payload.new.joined_at };
        setPlayers(prev => {
          // Check for duplicate names - strip emoji prefix for comparison
          const newBaseName = newPlayer.name.replace(/^\p{Emoji_Presentation}\s*/u, '').trim().toLowerCase();
          const duplicate = prev.find(p => {
            const existingBase = p.name.replace(/^\p{Emoji_Presentation}\s*/u, '').trim().toLowerCase();
            return existingBase === newBaseName;
          });
          if (duplicate) {
            // Auto-remove the newest (incoming) duplicate
            supabase.from('players').delete().eq('id', newPlayer.id).then();
            return prev;
          }
          return [...prev, newPlayer];
        });
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'players', filter: `game_id=eq.${game.id}` }, (payload: any) => {
        setPlayers(prev => prev.map(p => p.id === payload.new.id ? { ...p, name: payload.new.name, score: payload.new.score } : p));
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'answers', filter: `game_id=eq.${game.id}` }, (payload: any) => {
        setAnswers(prev => [...prev, payload.new as Answer]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [game?.id]);

  // Timer loop
  useEffect(() => {
    if (!game) return;
    setTimeLeft(timeLeftFor(game.phase, game.question_started_at));
    if (game.phase !== 'question' || game.revealed) return;

    const id = setInterval(() => {
      const left = timeLeftFor(game.phase, game.question_started_at);
      setTimeLeft(left);
      if (left <= 0) {
        hostAction('reveal');
      }
    }, 500);
    return () => clearInterval(id);
  }, [game?.phase, game?.revealed, game?.question_started_at]);

  useEffect(() => {
    if (!game || game.phase !== 'question' || game.revealed) return;
    if (players.length === 0 || currentAnswerTotal < players.length) return;

    const id = window.setTimeout(() => hostAction('reveal'), 450);
    return () => window.clearTimeout(id);
  }, [currentAnswerTotal, players.length, game?.phase, game?.revealed]);

  useEffect(() => {
    if (!game || !question || game.phase !== "question" || game.revealed) return;

    const answeredIds = new Set(
      answers
        .filter(answer => answer.question_index === game.current_question)
        .map(answer => answer.player_id)
    );
    const botsToAnswer = players.filter(player => {
      const answerKey = `${game.id}:${game.current_question}:${player.id}`;
      return player.id.startsWith("bot_") && !answeredIds.has(player.id) && !botAnswerKeys.current.has(answerKey);
    });

    if (botsToAnswer.length === 0) return;

    const timeouts = botsToAnswer.map((bot, index) => {
      const answerKey = `${game.id}:${game.current_question}:${bot.id}`;
      botAnswerKeys.current.add(answerKey);

      const idParts = bot.id.split("_");
      const botIndex = Number(idParts[idParts.length - 1]) || index;
      const choice = (botIndex + game.current_question) % letters.length;
      const delay = 650 + index * 360 + ((botIndex * 137) % 540);

      return window.setTimeout(async () => {
        const { data: latestGame } = await supabase
          .from("games")
          .select("phase,revealed,current_question,question_started_at")
          .eq("id", game.id)
          .single();

        if (
          !latestGame ||
          latestGame.phase !== "question" ||
          latestGame.revealed ||
          latestGame.current_question !== game.current_question
        ) {
          return;
        }

        const isCorrect = choice === question.correct;
        const botTimeLeft = timeLeftFor(latestGame.phase, latestGame.question_started_at);
        const earnedPoints = calculateQuestionPoints(isCorrect, question.pointsMultiplier ?? 1, botTimeLeft);
        const { error } = await supabase.from("answers").insert({
          game_id: game.id,
          player_id: bot.id,
          question_index: game.current_question,
          choice,
          correct: isCorrect
        } as any);

        if (!error && earnedPoints > 0) {
          const currentScore = players.find(player => player.id === bot.id)?.score ?? bot.score;
          await supabase
            .from("players")
            .update({ score: currentScore + earnedPoints } as any)
            .eq("id", bot.id);
        }
      }, delay);
    });

    return () => timeouts.forEach(timeout => window.clearTimeout(timeout));
  }, [game?.id, game?.phase, game?.revealed, game?.current_question, players.length, question]);

  useEffect(() => {
    if (!game || game.phase !== 'countdown') return;

    const tick = () => {
      const left = countdownLeftFor(game.phase, game.question_started_at);
      setCountdownLeft(left);

      if (left <= 0) {
        supabase
          .from('games')
          .update({ phase: 'question', question_started_at: Date.now() } as any)
          .eq('id', game.id)
          .select()
          .single()
          .then((result: { data: unknown }) => {
            const { data } = result;
            if (data) setGame(data as GameState);
          });
      }
    };

    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [game?.phase, game?.question_started_at, game?.id]);

  function baselinesFrom(currentPlayers: Player[]) {
    return Object.fromEntries(currentPlayers.map((player) => [player.id, player.score]));
  }

  async function hostAction(action: "start" | "reveal" | "next" | "reset") {
    if (!game) return;

    if (action === "reset") {
      botAnswerKeys.current.clear();
      await initializeGame();
      return;
    }

    const updates: Partial<GameState> = {};

    if (action === "start") {
      botAnswerKeys.current.clear();
      updates.phase = 'welcome';
      updates.current_question = 0;
      updates.revealed = false;
      updates.pending_sle_index = null;
      updates.question_started_at = Date.now();
      // Reset scores in DB
      players.forEach(p => supabase.from('players').update({ score: 0 } as any).eq('id', p.id).then());
      setPlayers(prev => prev.map(player => ({ ...player, score: 0 })));
      setScoreBaselines(Object.fromEntries(players.map(player => [player.id, 0])));
      setAnswers([]);
    }

    if (action === "reveal") {
      updates.revealed = true;
    }

    if (action === "next") {
      const q = questions[game.current_question];
      const atRoundEnd = q.questionIndex === sleRounds[q.roundIndex].questions.length - 1;
      const atFinalQuestion = game.current_question >= questions.length - 1;

      if (game.phase === 'sle') {
        if (atFinalQuestion) {
          updates.phase = 'leaderboard';
          launchConfetti();
        } else {
          updates.phase = 'countdown';
          updates.current_question = game.current_question + 1;
          updates.revealed = false;
          updates.pending_sle_index = null;
          updates.question_started_at = Date.now();
          setScoreBaselines(baselinesFrom(players));
        }
      } else if (game.phase === 'leaderboard') {
        if (atFinalQuestion && game.pending_sle_index === q.roundIndex) {
          updates.phase = 'thanks';
        } else if (atRoundEnd) {
          updates.phase = 'sle';
          updates.pending_sle_index = q.roundIndex;
        } else {
          updates.phase = 'countdown';
          updates.current_question = game.current_question + 1;
          updates.revealed = false;
          updates.pending_sle_index = null;
          updates.question_started_at = Date.now();
          setScoreBaselines(baselinesFrom(players));
        }
      } else {
        updates.phase = 'leaderboard';
      }
    }

    if (action === "next" && game.phase === 'welcome') {
      updates.phase = 'countdown';
      updates.current_question = 0;
      updates.revealed = false;
      updates.pending_sle_index = null;
      updates.question_started_at = Date.now();
      setScoreBaselines(baselinesFrom(players));
    }

    if (action === "next" && game.phase === 'thanks') {
      updates.phase = 'lobby';
      updates.current_question = 0;
      updates.revealed = false;
      updates.pending_sle_index = null;
      setAnswers([]);
    }

    const { data } = await supabase.from('games').update(updates as any).eq('id', game.id).select().single();
    if (data) {
      setGame(data as GameState);
    }
  }

  function kickPlayer(id: string, name: string) {
    setKickModal({ id, name });
  }

  async function confirmKick() {
    if (!kickModal) return;
    await supabase.from('players').delete().eq('id', kickModal.id);
    setPlayers(prev => prev.filter(p => p.id !== kickModal.id));
    setKickModal(null);
  }

  async function addStressBots() {
    if (!game || botCount > 0) return;

    const stamp = Date.now();
    const bots = botNames.map((name, index) => ({
      id: `bot_${stamp}_${String(index + 1).padStart(2, "0")}`,
      game_id: game.id,
      name: `${name} Bot ${String(index + 1).padStart(2, "0")}`,
      score: 0,
      joined_at: stamp + index
    }));

    await supabase.from("players").insert(bots as any);
  }

  async function toggleTestBots() {
    if (!game) return;

    if (testBotsEnabled) {
      setTestBotsEnabled(false);
      botAnswerKeys.current.clear();
      await supabase
        .from("players")
        .delete()
        .eq("game_id", game.id)
        .like("id", "bot_%");
      setPlayers(prev => prev.filter(player => !player.id.startsWith("bot_")));
      return;
    }

    setTestBotsEnabled(true);
  }

  function launchConfetti() {
    setConfetti(Array.from({ length: 100 }, (_, i) => i));
    window.setTimeout(() => setConfetti([]), 6000);
  }

  useEffect(() => {
    function shortcuts(event: KeyboardEvent) {
      if (!game) return;
      if (event.code === "Space" && game.phase === "question") {
        event.preventDefault();
        if (game.revealed) hostAction("next");
      }
    }
    window.addEventListener("keydown", shortcuts);
    return () => window.removeEventListener("keydown", shortcuts);
  }, [game]);

  if (!hostAuth) {
    return (
      <main className="app">
        <section className="card" style={{ maxWidth: '400px', width: '100%', margin: 'auto' }}>
          <div className="join-wrapper">
            <div className="stack stack-sm text-center">
              <h1>Host Access</h1>
              <p className="subtitle">Enter the host password to continue.</p>
            </div>
            <div className="join-form">
              <div className="input-group">
                <input
                  type="password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && password === "cwb" && setHostAuth(true)}
                  placeholder="Password"
                  autoFocus
                  suppressHydrationWarning
                />
              </div>
              <button 
                className="btn btn-primary btn-full btn-lg" 
                onClick={() => password === "cwb" && setHostAuth(true)}
              >
                Enter
              </button>
              {password !== "" && password !== "cwb" && <div className="message error">Incorrect password</div>}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!game) {
    return (
      <main className="app host-app">
        <div className="spinner" />
      </main>
    );
  }

  return (
    <main className="app host-app">

      {/* ── LOBBY ── */}
      {game.phase === "lobby" && (
        <section className="card host-lobby">
          <div className="topbar">
            <div className="badge">Host Control Panel</div>
            <button className="btn btn-ghost" onClick={() => hostAction("reset")}>
              Reset
            </button>
          </div>

          <div className="lobby-header">
            <h1>How Well Do You Know Aadit?</h1>
            <p className="subtitle">
              Students join on their devices. Show this screen on the projector.
            </p>
          </div>

          <div className="code-display" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div className="text-muted text-sm" style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Class Code
              </div>
              <div className="code-value">{game.code}</div>
            </div>
            
            {joinUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div className="text-muted text-sm" style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Or Scan
                </div>
                <div className="qr-wrapper">
                  <QRCodeSVG
                    value={qrJoinUrl}
                    size={190}
                    bgColor="#ffffff"
                    fgColor="#0f0f11"
                    level="M"
                  />
                </div>
              </div>
            )}
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div className="badge green">{players.length} player{players.length !== 1 ? "s" : ""} joined</div>
            </div>
          </div>

          {/* Player cards */}
          {players.length > 0 && (
            <div className="player-cards-grid">
              {players.map((p) => {
                // Extract emoji and base name
                const emojiMatch = p.name.match(/^(\p{Emoji_Presentation})/u);
                const emoji = emojiMatch ? emojiMatch[1] : '👤';
                const baseName = emojiMatch ? p.name.slice(emojiMatch[1].length).trim() : p.name;
                return (
                  <div className="player-card" key={p.id} onClick={() => kickPlayer(p.id, p.name)}>
                    <div className="player-card-emoji">{emoji}</div>
                    <span className="player-card-name">{baseName}</span>
                    {(playerStreaks[p.id] ?? 0) > 1 && (
                      <span className="player-card-streak">🔥 {playerStreaks[p.id]}</span>
                    )}
                    <Trash2 className="player-card-trash" size={16} />
                  </div>
                );
              })}
            </div>
          )}

          <div className="button-row">
            <div className="host-test-controls">
              <button
                className={`btn btn-ghost btn-lg test-mode-toggle ${testBotsEnabled ? "active" : ""}`}
                onClick={toggleTestBots}
              >
                {testBotsEnabled ? "Test Bots: On" : "Test Bots: Off"}
              </button>
              {testBotsEnabled && (
                <button
                  className="btn btn-ghost btn-lg stress-bot-btn"
                  onClick={addStressBots}
                  disabled={botCount > 0}
                >
                  {botCount > 0 ? `${botCount} Bots Ready` : "Add 35 Test Bots"}
                </button>
              )}
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => hostAction("start")}
              disabled={players.length === 0}
            >
              Start Round
            </button>
          </div>
        </section>
      )}

      {/* ── WELCOME ── */}
      {game.phase === "welcome" && (
        <section className="host-full-screen welcome-full">
          <div className="welcome-card">
            <div className="badge accent center-x">QoFa 8th Grade SLE Project</div>
            <h1>Welcome</h1>
            <p>How Well Do You Know Aadit?</p>
            <button className="btn btn-primary btn-xl" onClick={() => hostAction("next")}>
              Begin →
            </button>
          </div>
        </section>
      )}

      {/* ── COUNTDOWN ── */}
      {game.phase === "countdown" && question && (
        <section className="host-full-screen countdown-full">
          <div className="countdown-kicker">
            {question.pointsMultiplier === 2 ? "Next Question" : "Next Question"}
          </div>
          {question.pointsMultiplier === 2 && (
            <div className="double-points-badge angled">
              <span>Double Points</span>
              <b>×2</b>
            </div>
          )}
          <div className="countdown-number" key={countdownLeft}>
            {countdownLeft}
          </div>
          <div className="countdown-round">{question.round}</div>
        </section>
      )}

      {/* ── QUESTION ── */}
      {game.phase === "question" && question && (
        <section className={`host-full-screen ${game.revealed ? "revealed" : "answering"}`}>
          <div className="host-top-bar">
            <div className="stat-pill">
              <span className="stat-label">Answers</span>
              <span className="stat-value">{currentAnswerTotal} / {players.length}</span>
            </div>
            <CircularTimer timeLeft={timeLeft} revealed={game.revealed} size="lg" />
            <div className="stat-pill">
              <span className="stat-label">Round</span>
              <span className="stat-value">{question.round}</span>
            </div>
          </div>

          {question.pointsMultiplier === 2 && (
            <div className="double-points-under-timer">
              <div className="double-points-badge question">
                <span>Double Points</span>
                <b>×2</b>
              </div>
            </div>
          )}

          <div className="host-question-center">
            <h1 className="host-big-question-text">{question.text}</h1>
          </div>

          <div className="host-answers-grid-full">
            {question.answers.map((ans, index) => (
              <div
                className={`host-answer-huge ${letters[index].toLowerCase()} ${game.revealed && index === question.correct ? "correct" : ""} ${game.revealed && index !== question.correct ? "dim" : ""}`}
                key={ans}
              >
                <div className="letter-badge-huge">{letters[index]}</div>
                <div className="answer-text-huge">{ans}</div>
              </div>
            ))}
          </div>

          {game.revealed && (
            <div className="host-reveal-results">
              <div className="host-answer-chart final" aria-label="Final answer counts">
                {answerCounts.map((count, index) => {
                  const selectedNames = answerNamesByChoice[index];

                  return (
                  <div
                    className={`answer-chart-column ${letters[index].toLowerCase()}`}
                    key={letters[index]}
                    tabIndex={0}
                    aria-label={`${letters[index]} selected by ${selectedNames.length === 0 ? "no one" : selectedNames.join(", ")}`}
                  >
                    <div className="answer-chart-top">
                      <strong>{count}</strong>
                    </div>
                    <div className="answer-chart-track">
                      <div
                        className="answer-chart-fill"
                        style={{
                          height: count === 0 ? "0%" : `${Math.max(8, (count / maxAnswerCount) * 100)}%`,
                          minHeight: count === 0 ? 0 : 8
                        }}
                      />
                    </div>
                    <div className="answer-chart-letter">{letters[index]}</div>
                    <div className="answer-chart-tooltip" role="tooltip">
                      <strong>{letters[index]} responses</strong>
                      {selectedNames.length > 0 ? (
                        <ul>
                          {selectedNames.map(name => (
                            <li key={name}>{name}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>No responses yet</span>
                      )}
                    </div>
                  </div>
                  );
                })}
              </div>
              <div className="host-story-toast host-story-panel">{question.story}</div>
            </div>
          )}

          <div className="host-bottom-bar">
            <div className="points-info">
              <span className="points-val">+{questionMaxPoints}</span>
              <span className="points-label">Points</span>
            </div>
            <div className="host-actions">
              {game.revealed ? (
                <button className="btn btn-primary btn-xl" onClick={() => hostAction("next")}>
                  Next →
                </button>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* ── SLE REVEAL ── */}
      {game.phase === "sle" && (
        <section className="host-full-screen sle-reveal-full">
          <div className="sle-header">
            <div className="badge accent">Schoolwide Learning Expectation</div>
            <h1 className="sle-main-title">{sle.title}</h1>
          </div>

          <div className="sle-grid-full">
            <div className="sle-card-huge">
              <div className="sle-card-label">Definition</div>
              <div className="sle-card-content">{sle.definition}</div>
            </div>
            <div className="sle-card-huge highlight">
              <div className="sle-card-label">Achievement Claim</div>
              <div className="sle-card-content">{sle.claim}</div>
            </div>
            <div className="sle-card-huge">
              <div className="sle-card-label">My Evidence</div>
              <div className="sle-card-content">{sle.evidence}</div>
            </div>
          </div>

          <div className="host-bottom-bar centered">
            <button className="btn btn-primary btn-xl" onClick={() => hostAction("next")}>
              Continue Quiz →
            </button>
          </div>
        </section>
      )}

      {/* ── LEADERBOARD ── */}
      {game.phase === "leaderboard" && (
        <section className="host-full-screen leaderboard-full">
          <div className="leaderboard-header">
            <div className="badge green">{game.current_question >= game.question_count - 1 && game.pending_sle_index === question?.roundIndex ? "Final Results" : "After This Question"}</div>
            <h1 className="leaderboard-main-title">Top 5 Scores</h1>
          </div>

          <div className="leaderboard-list-huge">
            {rankedPlayers.slice(0, 5).map((p, i) => (
              <div className={`leaderboard-row-huge rank-${i + 1}`} key={p.id}>
                <div className="rank-badge-huge">{i + 1}</div>
                <div className="player-info-huge">
                  <span className="player-name-huge">{p.name}</span>
                  {(playerStreaks[p.id] ?? 0) > 1 && (
                    <span className="leaderboard-streak">🔥 {playerStreaks[p.id]} streak</span>
                  )}
                </div>
                <div className="score-badge-wrap">
                  {p.score > (scoreBaselines[p.id] ?? p.score) && (
                    <span className="score-delta">+{(p.score - (scoreBaselines[p.id] ?? p.score)).toLocaleString()}</span>
                  )}
                  <div className="score-badge-huge">
                    <AnimatedScore from={scoreBaselines[p.id] ?? p.score} to={p.score} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="host-bottom-bar centered">
            <button className="btn btn-primary btn-xl" onClick={() => hostAction("next")}>
              {game.current_question >= game.question_count - 1 && game.pending_sle_index === question?.roundIndex ? "Back to Lobby" : "Continue →"}
            </button>
          </div>
        </section>
      )}

      {/* ── THANK YOU ── */}
      {game.phase === "thanks" && (
        <section className="host-full-screen thanks-full">
          <div className="welcome-card">
            <div className="badge green center-x">Presentation Complete</div>
            <h1>Thank You</h1>
            <p>Thank you for playing and for being part of my QoFa journey.</p>
            <button className="btn btn-primary btn-xl" onClick={() => hostAction("next")}>
              Back to Lobby
            </button>
          </div>
        </section>
      )}

      {/* ── KICK CONFIRMATION MODAL ── */}
      {kickModal && (
        <div className="modal-overlay" onClick={() => setKickModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">🗑️</div>
            <h3>Remove Player</h3>
            <p className="text-muted">Are you sure you want to remove <strong>{kickModal.name}</strong> from the game?</p>
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setKickModal(null)}>Cancel</button>
              <button className="btn btn-danger" onClick={confirmKick}>Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* ── CONFETTI ── */}
      <div className="confetti" aria-hidden="true">
        {confetti.map((piece) => (
          <i
            key={piece}
            style={{
              left: `${Math.random() * 100}%`,
              background: confettiColors[piece % confettiColors.length],
              animationDuration: `${2.4 + Math.random() * 2.8}s`,
              animationDelay: `${Math.random() * 0.8}s`
            }}
          />
        ))}
      </div>
    </main>
  );
}
