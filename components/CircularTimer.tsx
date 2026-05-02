import { QUESTION_SECONDS } from "@/utils/game-logic";

type CircularTimerProps = {
  timeLeft: number;
  revealed?: boolean;
  result?: "correct" | "incorrect" | "timeout";
  size?: "sm" | "md" | "lg";
};

export default function CircularTimer({ timeLeft, revealed = false, result, size = "md" }: CircularTimerProps) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const progress = revealed ? 1 : Math.max(0, Math.min(1, timeLeft / QUESTION_SECONDS));
  const dashOffset = circumference * (1 - progress);
  const symbol = result === "timeout" ? "⏱" : result === "incorrect" ? "×" : "✓";

  return (
    <div className={`circular-timer ${size} ${timeLeft <= 5 && !revealed ? "urgent" : ""} ${revealed ? "done" : ""} ${result ?? ""}`}>
      <svg viewBox="0 0 104 104" aria-hidden="true">
        <circle className="timer-track" cx="52" cy="52" r={radius} />
        <circle
          className="timer-progress"
          cx="52"
          cy="52"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <span>{revealed ? symbol : timeLeft}</span>
    </div>
  );
}
