"use client";

import { useEffect, useState } from "react";

type AnimatedScoreProps = {
  from: number;
  to: number;
};

export default function AnimatedScore({ from, to }: AnimatedScoreProps) {
  const [displayScore, setDisplayScore] = useState(from);

  useEffect(() => {
    const start = performance.now();
    const duration = 900;
    const difference = to - from;

    if (difference === 0) {
      setDisplayScore(to);
      return;
    }

    let animationId = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(from + difference * eased));

      if (progress < 1) animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [from, to]);

  return <>{displayScore.toLocaleString()}</>;
}
