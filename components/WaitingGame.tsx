"use client";

import type { SyntheticEvent } from "react";
import { useEffect, useRef, useState } from "react";

export default function WaitingGame({ onHighScore }: { onHighScore?: (score: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameWrapRef = useRef<HTMLDivElement>(null);
  const onHighScoreRef = useRef(onHighScore);
  const bestScoreRef = useRef(0);
  const triggerInputRef = useRef(() => {});
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    onHighScoreRef.current = onHighScore;
  }, [onHighScore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gameWrap = gameWrapRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load Sprites
    const sprites: Record<string, HTMLImageElement> = {};
    const sources = {
      bg: "/assets/background-day.png",
      base: "/assets/base.png",
      yellowMid: "/assets/yellowbird-midflap.png",
      yellowUp: "/assets/yellowbird-upflap.png",
      yellowDown: "/assets/yellowbird-downflap.png",
      blueMid: "/assets/bluebird-midflap.png",
      blueUp: "/assets/bluebird-upflap.png",
      blueDown: "/assets/bluebird-downflap.png",
      redMid: "/assets/redbird-midflap.png",
      redUp: "/assets/redbird-upflap.png",
      redDown: "/assets/redbird-downflap.png",
      pipe: "/assets/pipe-green.png",
      message: "/assets/message.png",
      gameover: "/assets/gameover.png",
      '0': "/assets/0.png",
      '1': "/assets/1.png",
      '2': "/assets/2.png",
      '3': "/assets/3.png",
      '4': "/assets/4.png",
      '5': "/assets/5.png",
      '6': "/assets/6.png",
      '7': "/assets/7.png",
      '8': "/assets/8.png",
      '9': "/assets/9.png",
    };

    let loadedCount = 0;
    const totalSources = Object.keys(sources).length;

    for (const [key, src] of Object.entries(sources)) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalSources) {
          init();
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalSources) {
          init();
        }
      };
      sprites[key] = img;
    }

    let animationId: number;
    let state = "GET_READY"; // GET_READY, PLAYING, GAME_OVER
    let frames = 0;
    let currentScore = 0;

    const reportHighScore = () => {
      if (currentScore <= bestScoreRef.current) return;

      bestScoreRef.current = currentScore;
      setHighScore(currentScore);
      window.setTimeout(() => onHighScoreRef.current?.(currentScore), 0);
    };

    const bird = {
      x: 50,
      y: 150,
      width: 34,
      height: 24,
      velocity: 0,
      gravity: 0.25,
      jump: -4.6,
      rotation: 0,
      frame: 0,
      draw(ctx: CanvasRenderingContext2D) {
        let animation = [sprites.yellowMid, sprites.yellowUp, sprites.yellowMid, sprites.yellowDown];
        let birdFrame = animation[this.frame];
        if (state === "GET_READY") {
          this.y = 150 + Math.cos(frames / 10) * 5; // Hovering
        }
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(birdFrame, -this.width / 2, -this.height / 2);
        ctx.restore();
      },
      flap() {
        this.velocity = this.jump;
      },
      update() {
        // Animation speed
        const period = state === "GET_READY" ? 10 : 5;
        this.frame += frames % period === 0 ? 1 : 0;
        this.frame = this.frame % 4; // 4 animation frames

        if (state === "GET_READY") return;

        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.velocity >= this.jump) {
          this.rotation = Math.min(Math.PI / 2, Math.max(-Math.PI / 4, (this.velocity * 0.15)));
        } else {
          this.rotation = -0.3;
        }

        // Floor collision
        if (this.y + this.height / 2 >= canvas.height - 112) {
          this.y = canvas.height - 112 - this.height / 2;
          if (state === "PLAYING") {
            state = "GAME_OVER";
            reportHighScore();
          }
        }
        
        // Ceiling
        if (this.y - this.height / 2 <= 0) {
            this.y = this.height / 2;
            this.velocity = 0;
        }
      }
    };

    const pipes = {
      position: [] as {x: number, y: number}[],
      w: 52,
      h: 320,
      gap: 100,
      dx: 2,
      draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.position.length; i++) {
          let p = this.position[i];
          let topYPos = p.y;
          let bottomYPos = p.y + this.h + this.gap;

          // Top pipe (rotated 180 degrees)
          ctx.save();
          ctx.translate(p.x + this.w / 2, topYPos + this.h / 2);
          ctx.rotate(Math.PI);
          ctx.drawImage(sprites.pipe, -this.w / 2, -this.h / 2, this.w, this.h);
          ctx.restore();

          // Bottom pipe
          ctx.drawImage(sprites.pipe, p.x, bottomYPos, this.w, this.h);
        }
      },
      update() {
        if (state !== "PLAYING") return;

        if (frames % 100 === 0) {
          this.position.push({
            x: canvas.width,
            y: -150 * (Math.random() + 1)
          });
        }

        for (let i = 0; i < this.position.length; i++) {
          let p = this.position[i];
          let bottomPipeYPos = p.y + this.h + this.gap;

          // Collision detection
          if (bird.x + bird.width / 2 > p.x && bird.x - bird.width / 2 < p.x + this.w &&
              bird.y + bird.height / 2 > p.y && bird.y - bird.height / 2 < p.y + this.h) {
            state = "GAME_OVER";
            reportHighScore();
          }

          if (bird.x + bird.width / 2 > p.x && bird.x - bird.width / 2 < p.x + this.w &&
              bird.y + bird.height / 2 > bottomPipeYPos && bird.y - bird.height / 2 < bottomPipeYPos + this.h) {
            state = "GAME_OVER";
            reportHighScore();
          }

          p.x -= this.dx;

          if (p.x + this.w === bird.x) {
            currentScore++;
            setScore(currentScore);
          }

          if (p.x + this.w <= 0) {
            this.position.shift();
          }
        }
      },
      reset() {
        this.position = [];
      }
    };

    const bg = {
      x: 0,
      draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(sprites.bg, this.x, 0, canvas.width, canvas.height);
      }
    };

    const fg = {
      x: 0,
      draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(sprites.base, this.x, canvas.height - 112, 336, 112);
      },
      update() {
        if (state === "PLAYING") {
          this.x = (this.x - 2) % 48; // 336 - 288 = 48
        }
      }
    };

    const drawScore = () => {
      if (state === "GET_READY") return;
      const scoreStr = currentScore.toString();
      let width = 0;
      for (let i = 0; i < scoreStr.length; i++) {
        width += sprites[scoreStr[i]].width + 2;
      }
      let currX = canvas.width / 2 - width / 2;
      for (let i = 0; i < scoreStr.length; i++) {
        ctx.drawImage(sprites[scoreStr[i]], currX, 50);
        currX += sprites[scoreStr[i]].width + 2;
      }
    };

    const drawMessage = () => {
      if (state === "GET_READY") {
        ctx.fillStyle = "white";
        ctx.font = "bold 24px Inter";
        ctx.textAlign = "center";
        ctx.shadowColor = "rgba(0,0,0,0.8)";
        ctx.shadowBlur = 4;
        ctx.fillText("Tap to Start!", canvas.width / 2, canvas.height / 2 - 30);
        ctx.shadowBlur = 0; // reset
      } else if (state === "GAME_OVER") {
        ctx.drawImage(sprites.gameover, canvas.width / 2 - 192 / 2, 120, 192, 42);
        
        ctx.fillStyle = "white";
        ctx.font = "bold 20px Inter";
        ctx.textAlign = "center";
        ctx.fillText("Tap to Retry", canvas.width / 2, 220);
      }
    };

    const loop = () => {
      bg.draw(ctx);
      pipes.draw(ctx);
      fg.draw(ctx);
      bird.draw(ctx);
      drawMessage();
      drawScore();

      bird.update();
      fg.update();
      pipes.update();

      frames++;
      animationId = requestAnimationFrame(loop);
    };

    const init = () => {
      if (animationId) cancelAnimationFrame(animationId);
      frames = 0;
      loop();
    };

    let lastInputAt = 0;

    const handleInput = (e?: Event) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      const now = performance.now();
      if (now - lastInputAt < 120) return;
      lastInputAt = now;

      switch (state) {
        case "GET_READY":
          state = "PLAYING";
          bird.flap();
          break;
        case "PLAYING":
          bird.flap();
          break;
        case "GAME_OVER":
          bird.y = 150;
          bird.velocity = 0;
          bird.rotation = 0;
          pipes.reset();
          currentScore = 0;
          setScore(0);
          state = "GET_READY";
          break;
      }
    };

    triggerInputRef.current = () => handleInput();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleInput();
      }
    };

    const inputTarget = gameWrap || canvas;

    inputTarget.addEventListener("touchstart", handleInput, { passive: false });
    inputTarget.addEventListener("touchend", handleInput, { passive: false });
    inputTarget.addEventListener("mousedown", handleInput);
    inputTarget.addEventListener("click", handleInput);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      triggerInputRef.current = () => {};
      inputTarget.removeEventListener("touchstart", handleInput);
      inputTarget.removeEventListener("touchend", handleInput);
      inputTarget.removeEventListener("mousedown", handleInput);
      inputTarget.removeEventListener("click", handleInput);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const triggerFromReact = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    triggerInputRef.current();
  };

  return (
    <div
      ref={gameWrapRef}
      role="button"
      tabIndex={0}
      aria-label="Play Flappy Bird"
      onTouchStart={triggerFromReact}
      onTouchEnd={triggerFromReact}
      onMouseDown={triggerFromReact}
      onClick={triggerFromReact}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px',
        width: '100%',
        touchAction: 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 'min(316px, 100%)', fontWeight: 800, color: '#a1a1aa', fontSize: '0.9rem' }}>
        <span>Score: <span style={{ color: '#fff' }}>{score}</span></span>
        <span>Best: <span style={{ color: '#fff' }}>{highScore}</span></span>
      </div>
      <canvas
        ref={canvasRef}
        width={288}
        height={512}
        style={{
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          touchAction: 'none',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          width: 'min(316px, 100%)',
          height: 'auto',
          display: 'block'
        }}
      />
    </div>
  );
}
