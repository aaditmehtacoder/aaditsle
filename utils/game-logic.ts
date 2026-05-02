export function generateClassCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const QUESTION_SECONDS = 25;
export const COUNTDOWN_SECONDS = 5;

export function timeLeftFor(phase: string, questionStartedAt: number) {
  if (phase !== "question") return QUESTION_SECONDS;
  const elapsed = Math.floor((Date.now() - questionStartedAt) / 1000);
  return Math.max(0, QUESTION_SECONDS - elapsed);
}

export function countdownLeftFor(phase: string, countdownStartedAt: number) {
  if (phase !== "countdown") return COUNTDOWN_SECONDS;
  const elapsed = Math.floor((Date.now() - countdownStartedAt) / 1000);
  return Math.max(0, COUNTDOWN_SECONDS - elapsed);
}

export function maxPointsFor(multiplier = 1) {
  return 1000 * multiplier;
}

export function calculateQuestionPoints(isCorrect: boolean, multiplier = 1, timeLeft: number) {
  if (!isCorrect) return 0;

  const maxPoints = maxPointsFor(multiplier);
  const speedPercent = Math.max(0, Math.min(1, timeLeft / QUESTION_SECONDS));
  const percentAwarded = 0.7 + speedPercent * 0.3;

  return Math.round(maxPoints * percentAwarded);
}

export function pointsComment(points: number, multiplier = 1) {
  const maxPoints = maxPointsFor(multiplier);
  const percent = points / maxPoints;

  if (points <= 0) return "Good try.";
  if (percent >= 0.96) return "Lightning fast!";
  if (percent >= 0.9) return "Great speed!";
  if (percent >= 0.8) return "Nice answer!";
  return "You got it!";
}
