"use client";

import { useCallback, useEffect, useState } from "react";
import { questions } from "@/lib/quiz-data";
import { createClient } from "@/utils/supabase/client";
import {
  calculateQuestionPoints,
  COUNTDOWN_SECONDS,
  countdownLeftFor,
  pointsComment,
  QUESTION_SECONDS,
  timeLeftFor
} from "@/utils/game-logic";
import CircularTimer from "@/components/CircularTimer";
import WaitingGame from "@/components/WaitingGame";
import { Flame, Lightbulb } from "lucide-react";

type Phase = "lobby" | "welcome" | "countdown" | "question" | "sle" | "leaderboard" | "thanks" | "photos" | "results";
type Player = { id: string; name: string; score: number };
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
const playerKey = "aadit-quiz-player-id";

type JoinStep = "code" | "name";

function plainPlayerName(playerName = "") {
  return playerName.replace(/^\p{Emoji_Presentation}\s*/u, "").trim() || playerName;
}

function rankSuffix(rank: number) {
  const lastTwo = rank % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return "th";

  if (rank % 10 === 1) return "st";
  if (rank % 10 === 2) return "nd";
  if (rank % 10 === 3) return "rd";
  return "th";
}

export default function PlayerPage() {
  const [game, setGame] = useState<GameState | null>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [messageKind, setMessageKind] = useState<"info" | "success" | "error">("info");
  const [joining, setJoining] = useState(false);
  const [sendingAnswer, setSendingAnswer] = useState<number | null>(null);
  const [joinStep, setJoinStep] = useState<JoinStep>("code");
  const [answerChoice, setAnswerChoice] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_SECONDS);
  const [avatarEmoji, setAvatarEmoji] = useState("");
  const [flappyScores, setFlappyScores] = useState<{ id: string; name: string; score: number }[]>([]);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [gamePlayers, setGamePlayers] = useState<Player[]>([]);
  const [answerPoints, setAnswerPoints] = useState(0);
  const [countdownLeft, setCountdownLeft] = useState(COUNTDOWN_SECONDS);
  const [suggestedGame, setSuggestedGame] = useState<GameState | null>(null);
  const [streak, setStreak] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [hiddenChoices, setHiddenChoices] = useState<number[]>([]);

  const faceEmojis = ["😎", "🤓", "🤠", "🥳", "👽", "🤖", "👻", "🦄", "🦁", "🐶", "🦊", "🦖", "🚀", "⭐", "🌟", "🏆", "🎓", "🎯", "🧠", "📚"];

  const supabase = createClient();
  const question = game ? questions[game.current_question] : null;
  const answerResult =
    game?.revealed && question
      ? answerChoice === null
        ? "timeout"
        : answerChoice === question.correct
        ? "correct"
        : "incorrect"
      : undefined;
  const finalLeaderboard =
    Boolean(game && game.current_question >= game.question_count - 1);
  const rankedGamePlayers = [...gamePlayers].sort((a, b) => b.score - a.score);
  const playerRankIndex = player ? rankedGamePlayers.findIndex((entry) => entry.id === player.id) : -1;
  const playerRank = playerRankIndex >= 0 ? playerRankIndex + 1 : null;
  const playerAhead = playerRankIndex > 0 ? rankedGamePlayers[playerRankIndex - 1] : null;
  const pointsBehind = player && playerAhead ? Math.max(0, playerAhead.score - player.score) : 0;

  async function selectGameByCode(nextCode: string) {
    const normalizedCode = nextCode.trim().toUpperCase();
    if (!normalizedCode) return false;

    const { data, error } = await supabase
      .from('games')
      .select('*')
      .eq('code', normalizedCode)
      .single();

    if (error || !data) return false;

    setCode(normalizedCode);
    setGame(data as GameState);
    const { data: playersData } = await supabase
      .from('players')
      .select('id,name,score')
      .eq('game_id', data.id);
    setGamePlayers((playersData as Player[]) || []);
    setMessage("");
    setMessageKind("success");
    setJoinStep("name");
    return true;
  }

  useEffect(() => {
    const codeFromUrl = new URLSearchParams(window.location.search).get("code");
    if (!codeFromUrl) return;

    selectGameByCode(codeFromUrl).then((foundGame) => {
      if (foundGame) return;
      setCode(codeFromUrl.trim().toUpperCase());
      setMessage("Class code not found. Ask the host to refresh the QR code.");
      setMessageKind("error");
    });
  }, []);

  useEffect(() => {
    async function loadSuggestedGame() {
      const { data } = await supabase
        .from('games')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      const latestGame = Array.isArray(data) && data.length > 0 ? data[0] : null;
      if (latestGame) setSuggestedGame(latestGame as GameState);
    }

    loadSuggestedGame();

    const channel = supabase
      .channel('latest-player-game')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'games' }, (payload: any) => {
        setSuggestedGame(payload.new as GameState);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Sync timer
  useEffect(() => {
    if (!game) return;
    setTimeLeft(timeLeftFor(game.phase, game.question_started_at));
    if (game.phase !== 'question' || game.revealed) return;

    const id = setInterval(() => {
      setTimeLeft(timeLeftFor(game.phase, game.question_started_at));
    }, 500);
    return () => clearInterval(id);
  }, [game?.phase, game?.revealed, game?.question_started_at]);

  useEffect(() => {
    if (!game) return;
    setCountdownLeft(countdownLeftFor(game.phase, game.question_started_at));
    if (game.phase !== 'countdown') return;

    const id = setInterval(() => {
      setCountdownLeft(countdownLeftFor(game.phase, game.question_started_at));
    }, 250);
    return () => clearInterval(id);
  }, [game?.phase, game?.question_started_at]);

  // Real-time game updates
  useEffect(() => {
    if (!game) return;

    const channel = supabase
      .channel(`player-${game.id}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'games', filter: `id=eq.${game.id}` }, (payload: any) => {
        const nextGame = payload.new as GameState;
        setGame((currentGame) => {
          if (
            currentGame &&
            (nextGame.current_question !== currentGame.current_question ||
              nextGame.phase !== currentGame.phase)
          ) {
            setAnswerChoice(null);
            setAnswerPoints(0);
            setHiddenChoices([]);
          }

          return nextGame;
        });
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'players', filter: `id=eq.${player?.id}` }, (payload: any) => {
        setPlayer(prev => prev ? { ...prev, score: payload.new.score } : null);
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'players', filter: `game_id=eq.${game.id}` }, (payload: any) => {
        if (payload.eventType === 'DELETE') {
          setGamePlayers(prev => prev.filter(entry => entry.id !== payload.old.id));
          return;
        }

        const nextPlayer = { id: payload.new.id, name: payload.new.name, score: payload.new.score };
        setGamePlayers(prev => {
          const exists = prev.some(entry => entry.id === nextPlayer.id);
          if (exists) return prev.map(entry => entry.id === nextPlayer.id ? nextPlayer : entry);
          return [...prev, nextPlayer];
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [game?.id, player?.id]);

  // Flappy Bird score broadcast channel
  useEffect(() => {
    if (!game || !player) return;
    const ch = supabase.channel(`flappy-${game.id}`);
    ch.on('broadcast', { event: 'flappy_score' }, ({ payload }: any) => {
      setFlappyScores(prev => {
        const existing = prev.find(s => s.id === payload.id);
        if (existing) {
          // Update name/emoji even if score isn't higher, to keep it in sync
          const updated = prev.map(s => s.id === payload.id ? { ...s, name: payload.name, score: Math.max(s.score, payload.score) } : s);
          return updated.sort((a, b) => b.score - a.score);
        }
        return [...prev, { id: payload.id, name: payload.name, score: payload.score }].sort((a, b) => b.score - a.score);
      });
    }).subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [game?.id, player?.id]);

  const handleFlappyHighScore = useCallback((score: number) => {
    if (!game || !player) return;
    const displayName = player.name;

    // Instantly update local state
    setFlappyScores(prev => {
      const existing = prev.find(s => s.id === player.id);
      if (existing) {
        const updated = prev.map(s => s.id === player.id ? { ...s, name: displayName, score: Math.max(s.score, score) } : s);
        return updated.sort((a, b) => b.score - a.score);
      }
      return [...prev, { id: player.id, name: displayName, score }].sort((a, b) => b.score - a.score);
    });

    // Broadcast
    supabase
      .channel(`flappy-${game.id}`)
      .httpSend('flappy_score', { id: player.id, name: displayName, score });
  }, [game?.id, player]);

  async function handleCodeNext() {
    if (!code.trim()) {
      setMessage("Enter a class code to continue.");
      setMessageKind("error");
      return;
    }
    setMessageKind("success");
    setMessage("Checking code...");
    const foundGame = await selectGameByCode(code);

    if (!foundGame) {
      setMessage("Class code not found.");
      setMessageKind("error");
    }
  }

  async function useSuggestedGame() {
    if (!suggestedGame) return;
    await selectGameByCode(suggestedGame.code);
  }

  async function handleNameSubmit() {
    if (!name.trim()) {
      setMessage("Enter your name to join.");
      setMessageKind("error");
      return;
    }

    if (!game) return;

    setJoining(true);
    setMessage("");

    try {
      // Check for duplicate names
      const { data: existing } = await supabase
        .from('players')
        .select('id')
        .eq('game_id', game.id)
        .ilike('name', `%${name.trim()}%`);

      if (existing && existing.length > 0) {
        setMessage("That name is already taken. Try a different one!");
        setMessageKind("error");
        setJoining(false);
        return;
      }

      const playerId = `p_${Date.now()}_${Math.random().toString(16).slice(2)}`;
      const { error } = await supabase.from('players').insert({
        id: playerId,
        game_id: game.id,
        name: name.trim().slice(0, 18),
        joined_at: Date.now()
      } as any);

      if (error) {
        setMessage("Could not join game.");
        setMessageKind("error");
        return;
      }

      window.localStorage.setItem(playerKey, playerId);
      const newPlayer = { id: playerId, name: name.trim().slice(0, 18), score: 0 };
      setPlayer(newPlayer);
      setGamePlayers(prev => [...prev, newPlayer]);
      setStreak(0);
      setHintUsed(false);
    } finally {
      setJoining(false);
    }
  }

  function useHint() {
    if (!question || hintUsed || answerChoice !== null || game?.revealed) return;

    const wrongChoices = question.answers
      .map((_, index) => index)
      .filter(index => index !== question.correct && !hiddenChoices.includes(index));
    const hiddenChoice = wrongChoices[(game?.current_question ?? 0) % wrongChoices.length];
    if (hiddenChoice !== undefined) {
      setHiddenChoices([hiddenChoice]);
      setHintUsed(true);
    }
  }

  async function submitAnswer(choice: number) {
    if (!player || !game || answerChoice !== null || game.revealed) return;
    if (hiddenChoices.includes(choice)) return;
    setSendingAnswer(choice);

    try {
      const isCorrect = question?.correct === choice;
      const timeRemaining = timeLeftFor(game.phase, game.question_started_at);
      const earnedPoints = calculateQuestionPoints(Boolean(isCorrect), question?.pointsMultiplier ?? 1, timeRemaining);
      const { error } = await supabase.from('answers').insert({
        game_id: game.id,
        player_id: player.id,
        question_index: game.current_question,
        choice,
        correct: isCorrect
      } as any);

      if (!error) {
        setAnswerChoice(choice);
        setAnswerPoints(earnedPoints);
        setStreak(prev => (isCorrect ? prev + 1 : 0));

        if (earnedPoints > 0) {
          const nextScore = player.score + earnedPoints;
          setPlayer({ ...player, score: nextScore });
          setGamePlayers(prev => prev.map(entry => entry.id === player.id ? { ...entry, score: nextScore } : entry));
          await supabase.from('players').update({ score: nextScore } as any).eq('id', player.id);
        }
      }
    } finally {
      setSendingAnswer(null);
    }
  }

  async function updateEmoji(emoji: string) {
    if (!player || !game) return;
    setAvatarEmoji(emoji);

    const updatedName = `${emoji} ${name.trim()}`;
    const { error } = await supabase.from('players').update({ name: updatedName } as any).eq('id', player.id);
    
    if (!error) {
      setPlayer({ ...player, name: updatedName });
      
      // If they are on the leaderboard, update their entry for everyone
      const myScore = flappyScores.find(s => s.id === player.id);
      if (myScore) {
        supabase
          .channel(`flappy-${game.id}`)
          .httpSend('flappy_score', { id: player.id, name: updatedName, score: myScore.score });
      }
    }
  }

  function leaveGame() {
    window.localStorage.removeItem(playerKey);
    setPlayer(null);
    setGame(null);
    setName("");
    setCode("");
    setJoinStep("code");
    setMessage("");
    setMessageKind("info");
    setStreak(0);
    setHintUsed(false);
    setHiddenChoices([]);
  }

  const joined = Boolean(player && game);

  return (
    <main className="app">
      {/* ── JOIN FLOW ── */}
      {!joined && (
        <section className="card">
          <div className="join-wrapper">
            {/* Step indicators */}
            <div className="step-indicator">
              <div className={`step-dot ${joinStep === "code" ? "active" : ""}`} />
              <div className={`step-dot ${joinStep === "name" ? "active" : ""}`} />
            </div>

            <div className="stack stack-sm text-center">
              <h1>{joinStep === "code" ? "Join Game" : "What's Your Name?"}</h1>
              <p className="subtitle">
                {joinStep === "code"
                  ? "Enter the class code shown by Aadit on the screen."
                  : "Please enter your real name when you join."}
              </p>
            </div>

            <div className="join-form">
              {joinStep === "code" && (
                <>
                  {suggestedGame && (
                    <button className="current-game-card" onClick={useSuggestedGame}>
                      <span>Is this your game?</span>
                      <strong>{suggestedGame.code}</strong>
                      <em>Tap to use this code</em>
                    </button>
                  )}
                  <div className="input-group">
                    <label htmlFor="code-input">Class Code</label>
                    <input
                      id="code-input"
                      className="input-field"
                      value={code}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      onKeyDown={(e) => e.key === "Enter" && handleCodeNext()}
                      maxLength={8}
                      placeholder="Game Code"
                      autoCapitalize="characters"
                      autoCorrect="off"
                      autoComplete="off"
                      autoFocus
                      suppressHydrationWarning
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-full btn-lg"
                    style={{ touchAction: 'manipulation' }}
                    onClick={handleCodeNext}
                  >
                    Next →
                  </button>
                </>
              )}

              {joinStep === "name" && (
                <>
                  <div className="input-group">
                    <label htmlFor="name-input">Your Name</label>
                    <input
                      id="name-input"
                      className="input-field"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
                      maxLength={18}
                      placeholder="Enter your name"
                      autoComplete="name"
                      autoFocus
                      suppressHydrationWarning
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-full btn-lg"
                    style={{ touchAction: 'manipulation' }}
                    disabled={joining}
                    onClick={handleNameSubmit}
                  >
                    {joining ? "Joining..." : "Join"}
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => { setJoinStep("code"); setMessage(""); }}
                  >
                    ← Back
                  </button>
                </>
              )}

              {message && <div className={`message ${messageKind}`}>{message}</div>}
            </div>
          </div>
        </section>
      )}

      {/* ── WAITING IN LOBBY ── */}
      {joined && game?.phase === "lobby" && (
        <section className="lobby-full-page">
          {/* Big waiting message at the top */}
          <div className="waiting-title-wrap">
            <h1 className="waiting-title">
              Waiting for host to start...
            </h1>
          </div>

          {/* Class code badge - top left */}
          <div className="lobby-code-badge">
            <div className="badge" style={{ fontSize: '0.8rem' }}>Code: <strong>{game.code}</strong></div>
          </div>
          <div className="lobby-grid" style={{ marginTop: '60px' }}>

            {/* Left: Customization */}
            <div className="lobby-panel profile-panel">
              <h3>Customize Profile</h3>
              <p className="text-muted text-sm">This shows on the leaderboard!</p>

              <div className="emoji-grid">
                {faceEmojis.map(emoji => (
                  <button
                    key={emoji}
                    className={`emoji-btn ${avatarEmoji === emoji ? 'selected' : ''}`}
                    onClick={() => updateEmoji(emoji)}
                    aria-label={`Use ${emoji} as your avatar`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle: Welcome Message & Current Avatar */}
            <div className="lobby-panel center-panel">
              <div className="badge accent center-x" style={{ marginBottom: '16px' }}>You're In</div>
              <h2>{plainPlayerName(player?.name)}</h2>

              <div style={{
                marginTop: '24px',
                width: '120px',
                height: '120px',
                background: 'var(--card-bg)',
                border: '2px dashed var(--border)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}>
                {avatarEmoji || "👤"}
              </div>

              <button className="btn btn-danger leave-lobby-btn" onClick={() => setShowLeaveConfirm(true)}>
                Leave
              </button>
            </div>

            {/* Right: Flappy Bird */}
            <div className="lobby-panel game-panel">
              <WaitingGame onHighScore={handleFlappyHighScore} />

              {/* Mini Flappy Leaderboard */}
              <div className="flappy-leaderboard">
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>🏆 Flappy Leaderboard</div>
                {flappyScores.length === 0 ? (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center', padding: '16px 0' }}>
                    Waiting for scores...
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {flappyScores.slice(0, 5).map((s, i) => {
                      let emoji = '👤';
                      let baseName = s.name;
                      const firstSpace = s.name.indexOf(' ');
                      if (firstSpace !== -1 && firstSpace <= 4) {
                        emoji = s.name.slice(0, firstSpace);
                        baseName = s.name.slice(firstSpace + 1);
                      }

                      const isFirst = i === 0;
                      const displayName = avatarEmoji ? `${avatarEmoji} ${name.trim()}` : name.trim();
                      const isMe = s.name === displayName;

                      return (
                        <div key={s.name} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between', 
                          padding: '8px 12px', 
                          background: isFirst ? 'rgba(250, 204, 21, 0.1)' : (isMe ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255,255,255,0.04)'), 
                          borderRadius: '8px',
                          border: isFirst ? '1px solid rgba(250, 204, 21, 0.3)' : (isMe ? '1px solid var(--accent)' : '1px solid var(--border)'),
                          boxShadow: isFirst ? '0 4px 12px rgba(250, 204, 21, 0.1)' : 'none'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontWeight: 800, color: isFirst ? '#facc15' : 'var(--text-muted)', fontSize: '0.9rem', width: '12px' }}>{i + 1}</span>
                            <div style={{ 
                              width: '32px', 
                              height: '32px', 
                              background: 'rgba(255,255,255,0.1)', 
                              borderRadius: '8px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              fontSize: '1.2rem' 
                            }}>
                              {emoji}
                            </div>
                            <span style={{ 
                              fontWeight: isFirst || isMe ? 700 : 500, 
                              color: isFirst ? '#facc15' : 'var(--text)', 
                              overflow: 'hidden', 
                              textOverflow: 'ellipsis', 
                              whiteSpace: 'nowrap', 
                              maxWidth: '110px',
                              fontSize: '0.9rem'
                            }}>
                              {baseName} {isMe && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '4px', fontWeight: 500 }}>(You)</span>}
                            </span>
                          </div>
                          <span style={{ fontWeight: 800, fontSize: '1rem', color: isFirst ? '#facc15' : 'var(--text)' }}>
                            {s.score}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

          </div>

          {showLeaveConfirm && (
            <div className="modal-overlay" onClick={() => setShowLeaveConfirm(false)}>
              <div className="modal-card leave-confirm-card" onClick={(event) => event.stopPropagation()}>
                <div className="modal-icon">?</div>
                <h3>Leave the game?</h3>
                <p className="text-muted">Do you actually want to leave? You can rejoin with the class code.</p>
                <div className="modal-actions">
                  <button className="btn btn-ghost" onClick={() => setShowLeaveConfirm(false)}>Stay</button>
                  <button className="btn btn-danger" onClick={leaveGame}>Leave</button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ── WELCOME ── */}
      {joined && game?.phase === "welcome" && (
        <section className="player-full-screen player-message-screen welcome-full">
          <div className="badge accent center-x">Welcome</div>
          <h2>Get Ready</h2>
          <p>How Well Do You Know Aadit?</p>
        </section>
      )}

      {/* ── COUNTDOWN ── */}
      {joined && game?.phase === "countdown" && question && (
        <section className="player-full-screen countdown-full">
          <div className="countdown-kicker">
            Next Question
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

      {/* ── QUESTION PHASE (player answers) ── */}
      {joined && game?.phase === "question" && question && (
        <section className={`player-full-screen ${answerChoice !== null && !game.revealed ? "locked-waiting-screen" : ""}`}>
          <div className="player-answer-topbar">
            <div className="player-pill">
              <span className="player-pill-label">Player</span>
              <span className="player-pill-value">{player?.name}</span>
            </div>
            <CircularTimer timeLeft={timeLeft} revealed={game.revealed} result={answerResult} size="md" />
            <div className="player-pill">
              <span className="player-pill-label">Score</span>
              <span className="player-pill-value">{player?.score ?? 0}</span>
            </div>
          </div>

          {game.revealed && answerResult === "correct" && streak > 1 && (
            <div className="player-power-status">
              <div className="streak-pill">
                <Flame size={18} />
                <span>{streak} streak</span>
              </div>
            </div>
          )}

          {!(answerChoice !== null && !game.revealed) && (
            <div className="player-center-copy">
              {!game.revealed ? (
                <div className="answer-prompt-row">
                  <h2>Tap Your Answer</h2>
                  <button
                    className="hint-button"
                    disabled={hintUsed || hiddenChoices.length > 0}
                    onClick={useHint}
                  >
                    <Lightbulb size={20} />
                    <span>{hintUsed ? "Hint Used" : "Hint"}</span>
                  </button>
                </div>
              ) : (
                <h2>
                  {answerResult === "timeout"
                    ? "Time's Up"
                    : answerResult === "correct"
                    ? "Correct"
                    : "Not Quite"}
                </h2>
              )}
            </div>
          )}

          {answerChoice === null && !game.revealed ? (
            <div className="player-answer-grid-full">
              {question.answers.map((option, index) => (
                <button
                  className={`player-answer-tile ${letters[index].toLowerCase()} ${hiddenChoices.includes(index) ? "hidden-by-hint" : ""}`}
                  disabled={sendingAnswer !== null || hiddenChoices.includes(index)}
                  key={option}
                  onClick={() => submitAnswer(index)}
                  aria-label={`Answer ${letters[index]}`}
                >
                  <span className="player-answer-letter">{hiddenChoices.includes(index) ? "?" : letters[index]}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className={`player-locked-panel ${game.revealed ? answerResult ?? "" : "waiting"}`}>
              <div className="player-locked-icon">
                {game.revealed ? (answerResult === "timeout" ? "⏱" : answerResult === "correct" ? "✓" : "×") : "✓"}
              </div>
              <div className="player-locked-title">
                {game.revealed
                  ? answerResult === "timeout"
                    ? "Time's Up!"
                    : answerResult === "correct"
                    ? "You got it!"
                    : "Good try!"
                  : "Locked In!"}
              </div>
              {game.revealed && (
                <div className={`points-earned ${answerPoints > 0 ? "positive" : "zero"}`}>
                  <strong>{answerPoints > 0 ? `+${answerPoints.toLocaleString()}` : "+0"}</strong>
                  {answerPoints > 0 && <span>{pointsComment(answerPoints, question.pointsMultiplier ?? 1)}</span>}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* ── SLE MOMENT ── */}
      {joined && game?.phase === "sle" && (
        <section className="player-full-screen player-message-screen">
          <div className="badge accent center-x">SLE Moment</div>
          <h2>Look at the Screen</h2>
          <p>Aadit is presenting a Student Learning Expectation.</p>
        </section>
      )}

      {/* ── FINAL LEADERBOARD ── */}
      {joined && game?.phase === "leaderboard" && (
        <section className="player-full-screen player-message-screen">
          <div className="badge green center-x">{finalLeaderboard ? "Game Over" : "Leaderboard"}</div>
          {playerRank && playerRank <= 5 ? (
            <>
              <h2>You're #{playerRank}</h2>
              <div className="player-score-box">
                <span>Your Points</span>
                <strong>{(player?.score ?? 0).toLocaleString()}</strong>
              </div>
              {streak > 0 && <div className="player-streak-box">🔥 {streak} correct in a row</div>}
            </>
          ) : (
            <>
              <h2>{playerRank ? `You are ${playerRank}${rankSuffix(playerRank)}` : "You're playing"}</h2>
              <p>
                {playerAhead
                  ? `${pointsBehind.toLocaleString()} points behind ${plainPlayerName(playerAhead.name)}`
                  : `${player?.score ?? 0} points`}
              </p>
              <div className="player-score-box">
                <span>Your Points</span>
                <strong>{(player?.score ?? 0).toLocaleString()}</strong>
              </div>
              {streak > 0 && <div className="player-streak-box">🔥 {streak} correct in a row</div>}
            </>
          )}
        </section>
      )}

      {/* ── THANK YOU ── */}
      {joined && game?.phase === "thanks" && (
        <section className="player-full-screen player-message-screen thanks-full">
          <div className="badge green center-x">Thank You</div>
          <h2>Thanks for Playing</h2>
          <p>Great job, {plainPlayerName(player?.name)}.</p>
        </section>
      )}

      {/* ── PHOTO GALLERY ── */}
      {joined && game?.phase === "photos" && (
        <section className="player-full-screen player-message-screen player-photos-screen">
          <div className="badge accent center-x">Qofa Memories</div>
          <h2>Look at the Screen</h2>
          <p>Aadit is sharing a few photos before the final results.</p>
        </section>
      )}

      {/* ── FINAL RESULTS ── */}
      {joined && game?.phase === "results" && (
        <section className="player-full-screen player-message-screen player-results-screen">
          <div className="badge green center-x">Final Results</div>
          <h2>
            {playerRank
              ? `You placed ${playerRank}${rankSuffix(playerRank)}`
              : "Results are up"}
          </h2>
          <div className="player-score-box">
            <span>Your Points</span>
            <strong>{(player?.score ?? 0).toLocaleString()}</strong>
          </div>
          <p>Look at the screen for the top 3 podium.</p>
        </section>
      )}
    </main>
  );
}
