
A modern Kahoot-style quiz game for Aadit's 8th grade graduation SLE project at QoFa.

## How to Run

```bash
npm run dev -- -H 0.0.0.0
```

Open the host screen on the computer/projector:

```txt
http://localhost:3000/host
```

On iPads connected to the same Wi-Fi, open:

```txt
http://YOUR-COMPUTER-IP:3000
```

The app prints the Network URL in the terminal. Use that IP address for the iPads.

## Class Code

```txt
AADIT
```

## Flow

- Host opens `/host` on the computer/projector.
- Players open `/` on iPads.
- Players enter their name and class code.
- Host starts the quiz.
- Questions show on the host screen.
- iPads show big A/B/C/D buttons.
- Host reveals the answer and explains the story.
- SLE reveal cards appear after each round.
- Final leaderboard shows top 3 with confetti.

## Edit Questions and SLE Cards

Most presentation text lives in:

```txt
lib/quiz-data.ts
```

Replace the placeholder questions, answer choices, stories, definitions, claims, and evidence there.

## Multiplayer Note

This uses the Next.js server running on your computer as the shared game state. It is perfect for hosting locally on a laptop with iPads on the same Wi-Fi. If you deploy it to serverless hosting later, use Firebase, Supabase, or a WebSocket server for persistent shared state.
