import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

function loadEnvFile(path) {
  try {
    const file = readFileSync(path, 'utf8');
    for (const line of file.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const equals = trimmed.indexOf('=');
      if (equals === -1) continue;
      const key = trimmed.slice(0, equals).trim();
      const value = trimmed.slice(equals + 1).trim().replace(/^['"]|['"]$/g, '');
      process.env[key] ||= value;
    }
  } catch {
    // .env.local is optional if vars are already exported.
  }
}

function argValue(name, fallback) {
  const index = process.argv.indexOf(`--${name}`);
  if (index === -1) return fallback;
  return process.argv[index + 1] ?? fallback;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const QUESTION_SECONDS = 25;
const correctAnswers = [1, 1, 2, 1, 1, 1, 1, 0];
const pointMultipliers = [1, 1, 1, 2, 1, 1, 1, 2];
const botNames = [
  'Mia', 'Leo', 'Sofia', 'Noah', 'Emma', 'Eli', 'Ava', 'Mateo', 'Luna', 'Owen',
  'Zoe', 'Mason', 'Nina', 'Lucas', 'Ella', 'Kai', 'Ruby', 'Miles', 'Ivy', 'Theo',
  'Grace', 'Liam', 'Maya', 'Jack', 'Chloe', 'Henry', 'Aria', 'Logan', 'Nora', 'Ezra',
  'Layla', 'Finn', 'Stella', 'Caleb', 'Jade', 'Riley', 'Max', 'Amelia', 'Luke', 'Sadie'
];

function calculatePoints(correct, multiplier, timeLeft) {
  if (!correct) return 0;
  const maxPoints = 1000 * multiplier;
  const speedPercent = Math.max(0, Math.min(1, timeLeft / QUESTION_SECONDS));
  return Math.round(maxPoints * (0.7 + speedPercent * 0.3));
}

loadEnvFile('.env.local');

const count = Number(argValue('count', '35'));
const code = argValue('code', '');
const accuracy = Number(argValue('accuracy', '0.72'));
const minDelay = Number(argValue('min-delay', '350'));
const maxDelay = Number(argValue('max-delay', '5000'));
const runId = Math.random().toString(36).slice(2, 6).toUpperCase();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getGame() {
  let query = supabase.from('games').select('*');
  if (code) query = query.eq('code', code.toUpperCase()).limit(1);
  else query = query.order('created_at', { ascending: false }).limit(1);

  const { data, error } = await query;
  if (error) throw error;
  const game = data?.[0];
  if (!game) throw new Error(code ? `No game found with code ${code}` : 'No game found. Open /host first.');
  return game;
}

async function insertBots(game) {
  const bots = Array.from({ length: count }, (_, index) => ({
    id: `bot_${Date.now()}_${index}_${Math.random().toString(16).slice(2)}`,
    game_id: game.id,
    name: `${botNames[index % botNames.length]} Bot ${String(index + 1).padStart(2, '0')}-${runId}`,
    score: 0,
    joined_at: Date.now() + index
  }));

  const { error } = await supabase.from('players').insert(bots);
  if (error) throw error;
  return bots;
}

async function answerForBot(game, bot, questionIndex) {
  const correctChoice = correctAnswers[questionIndex] ?? 0;
  const shouldBeCorrect = Math.random() < accuracy;
  const choice = shouldBeCorrect ? correctChoice : randomWrongChoice(correctChoice);
  const correct = choice === correctChoice;
  const delay = randomInt(minDelay, maxDelay);

  await sleep(delay);

  const { data: latestGame } = await supabase
    .from('games')
    .select('*')
    .eq('id', game.id)
    .single();

  if (!latestGame || latestGame.phase !== 'question' || latestGame.revealed || latestGame.current_question !== questionIndex) {
    return;
  }

  const elapsed = Math.floor((Date.now() - Number(latestGame.question_started_at)) / 1000);
  const timeLeft = Math.max(0, QUESTION_SECONDS - elapsed);
  const earned = calculatePoints(correct, pointMultipliers[questionIndex] ?? 1, timeLeft);
  const nextScore = bot.score + earned;

  const { error: answerError } = await supabase.from('answers').insert({
    game_id: game.id,
    player_id: bot.id,
    question_index: questionIndex,
    choice,
    correct
  });

  if (answerError) {
    console.warn(`Answer failed for ${bot.name}: ${answerError.message}`);
    return;
  }

  bot.score = nextScore;
  if (earned > 0) {
    const { error: scoreError } = await supabase
      .from('players')
      .update({ score: nextScore })
      .eq('id', bot.id);
    if (scoreError) console.warn(`Score update failed for ${bot.name}: ${scoreError.message}`);
  }

  console.log(`${bot.name} answered ${String.fromCharCode(65 + choice)} ${correct ? 'correct' : 'wrong'} (+${earned})`);
}

function randomWrongChoice(correctChoice) {
  const choices = [0, 1, 2, 3].filter(choice => choice !== correctChoice);
  return choices[randomInt(0, choices.length - 1)];
}

async function main() {
  const game = await getGame();
  console.log(`Joining game ${game.code} with ${count} bots...`);
  const bots = await insertBots(game);
  console.log('Bots joined. Start the game on /host. Press Ctrl+C to stop bots.');

  const answeredQuestions = new Set();

  while (true) {
    const { data: latestGame, error } = await supabase
      .from('games')
      .select('*')
      .eq('id', game.id)
      .single();

    if (error) throw error;

    if (latestGame.phase === 'question' && !latestGame.revealed && !answeredQuestions.has(latestGame.current_question)) {
      const questionIndex = latestGame.current_question;
      answeredQuestions.add(questionIndex);
      console.log(`Question ${questionIndex + 1}: bots answering...`);
      bots.forEach(bot => answerForBot(latestGame, bot, questionIndex));
    }

    if (latestGame.phase === 'thanks') {
      console.log('Game reached thank-you slide. Bot test complete.');
      break;
    }

    await sleep(450);
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
