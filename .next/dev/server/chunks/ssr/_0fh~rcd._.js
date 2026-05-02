module.exports = [
"[project]/components/WaitingGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaitingGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function WaitingGame() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [highScore, setHighScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationId;
        // Game variables
        let birdY = canvas.height / 2;
        let velocity = 0;
        const gravity = 0.45;
        const jump = -7.5;
        let pipes = [];
        const pipeWidth = 40;
        const gap = 130;
        let frame = 0;
        let currentScore = 0;
        const resetGame = ()=>{
            birdY = canvas.height / 2;
            velocity = 0;
            pipes = [];
            frame = 0;
            currentScore = 0;
            setScore(0);
        };
        const loop = ()=>{
            if (!isPlaying) {
                // Draw idle screen
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#6366f1";
                ctx.beginPath();
                ctx.arc(40, birdY, 12, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#ffffff";
                ctx.font = "bold 16px Inter";
                ctx.textAlign = "center";
                ctx.fillText("Tap to Start & Jump!", canvas.width / 2, canvas.height / 2);
                return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Bird physics
            velocity += gravity;
            birdY += velocity;
            // Add pipes
            if (frame % 90 === 0) {
                const top = Math.random() * (canvas.height - gap - 40) + 20;
                pipes.push({
                    x: canvas.width,
                    top,
                    bottom: top + gap
                });
            }
            // Draw pipes & collision
            ctx.fillStyle = "#22c55e";
            for(let i = 0; i < pipes.length; i++){
                const p = pipes[i];
                p.x -= 3.5;
                ctx.fillRect(p.x, 0, pipeWidth, p.top);
                ctx.fillRect(p.x, p.bottom, pipeWidth, canvas.height - p.bottom);
                // Collision
                if (40 + 10 > p.x && 40 - 10 < p.x + pipeWidth && (birdY - 10 < p.top || birdY + 10 > p.bottom)) {
                    setIsPlaying(false);
                    if (currentScore > highScore) setHighScore(currentScore);
                }
                // Score
                if (p.x === 40) {
                    currentScore++;
                    setScore(currentScore);
                }
            }
            // Remove offscreen pipes
            if (pipes.length > 0 && pipes[0].x < -pipeWidth) {
                pipes.shift();
            }
            // Floor / Ceiling collision
            if (birdY > canvas.height || birdY < 0) {
                setIsPlaying(false);
                if (currentScore > highScore) setHighScore(currentScore);
            }
            // Draw Bird
            ctx.fillStyle = "#facc15";
            ctx.beginPath();
            ctx.arc(40, birdY, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#ca8a04";
            ctx.lineWidth = 2;
            ctx.stroke();
            frame++;
            animationId = requestAnimationFrame(loop);
        };
        if (isPlaying) {
            animationId = requestAnimationFrame(loop);
        } else {
            loop(); // Draw initial frame
        }
        const handleInput = (e)=>{
            e.preventDefault();
            if (!isPlaying) {
                resetGame();
                setIsPlaying(true);
            }
            velocity = jump;
        };
        canvas.addEventListener("touchstart", handleInput, {
            passive: false
        });
        canvas.addEventListener("mousedown", handleInput);
        return ()=>{
            cancelAnimationFrame(animationId);
            canvas.removeEventListener("touchstart", handleInput);
            canvas.removeEventListener("mousedown", handleInput);
        };
    }, [
        isPlaying,
        highScore
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginTop: '16px',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '320px',
                    fontWeight: 800,
                    color: '#a1a1aa',
                    fontSize: '0.9rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Score: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#fff'
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/components/WaitingGame.tsx",
                                lineNumber: 143,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WaitingGame.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Best: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#fff'
                                },
                                children: highScore
                            }, void 0, false, {
                                fileName: "[project]/components/WaitingGame.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WaitingGame.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: 320,
                height: 400,
                style: {
                    background: '#0f172a',
                    borderRadius: '16px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    cursor: 'pointer',
                    touchAction: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#667085',
                    fontSize: '0.8rem',
                    marginTop: '8px'
                },
                children: "Waiting for host to start..."
            }, void 0, false, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WaitingGame.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0fh~rcd._.js.map