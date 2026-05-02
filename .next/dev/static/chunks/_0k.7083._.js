(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/quiz-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questions",
    ()=>questions,
    "sleRounds",
    ()=>sleRounds
]);
const sleRounds = [
    {
        title: "Caring Christian",
        definition: "To me, being a Caring Christian is more than just going to Mass. It's about actually seeing when someone is having a bad day and doing something about it, even if it's just a small gesture. It’s following Jesus' example by putting others before myself in the little moments of the day.",
        claim: "I feel that Caring Christian is my strongest SLE because I consistently look for ways to help my classmates and make sure everyone feels included in our school community.",
        evidence: "Being a Caring Christian at QoA has taught me that my actions have a real impact on others. Whether I'm helping my younger buddy with a craft or just holding the door for someone, those small choices build the kind of community I'm proud to be a part of. It’s not about being perfect, it’s about choosing kindness every single day.",
        questions: [
            {
                text: "If you see a classmate sitting alone at lunch looking upset, what would a Caring Christian do?",
                answers: [
                    "Walk past and ignore them",
                    "Go over and ask if they're okay",
                    "Tell a teacher later",
                    "Take a picture for social media"
                ],
                correct: 1,
                story: "Kindness is about action. Going over to someone might seem small, but it can change their whole day."
            },
            {
                text: "What is a way I've tried to show I care about our school community at QoA?",
                answers: [
                    "Organizing a secret snack club",
                    "Helping my younger buddy with projects",
                    "Always being the first to leave",
                    "Volunteering to clean the lunch tables"
                ],
                correct: 1,
                story: "Working with my younger buddy is one of my favorite parts of my time at Queen of Apostles. It has taught me how to be patient, lead by example, and really put someone else's needs before my own. This experience is a big part of why I feel strongest about being a Caring Christian."
            }
        ]
    },
    {
        title: "Active Learner",
        definition: "Being an Active Learner means I don't just sit in class waiting for the bell to ring. I ask questions, dive into projects, and even when I run into a bug in my code, I don't give up until I figure it out.",
        claim: "I have moderately achieved this SLE by always giving my best effort on my assignments and showing curiosity in my favorite subjects like science and technology.",
        evidence: "Building this game was a huge learning experience for me as an Active Learner. I had to learn how to use new tools, troubleshoot errors, and keep refining the design until it worked exactly how I wanted. It showed me that if I stay engaged and keep problem-solving, I can create something really cool.",
        questions: [
            {
                text: "What is the best way to handle a difficult math problem you don't understand?",
                answers: [
                    "Skip it and move on",
                    "Copy the answer from a friend",
                    "Ask for help and keep trying",
                    "Close your notebook and sleep"
                ],
                correct: 2,
                story: "Learning isn't about knowing everything right away; it's about the effort you put in to understand it."
            },
            {
                text: "What was the biggest challenge I faced while building this custom quiz game?",
                answers: [
                    "Choosing the background color",
                    "Debugging the real-time scores",
                    "Typing my name correctly",
                    "Finding the login button"
                ],
                correct: 1,
                story: "Getting the real-time leaderboard to work was definitely the biggest challenge of this whole project. I spent hours debugging the code and testing it with my friends to make sure every tap was recorded correctly. It taught me that being an Active Learner is all about sticking with a problem until it's solved.",
                pointsMultiplier: 2
            }
        ]
    },
    {
        title: "Self-Confident & Responsible",
        definition: "This SLE is about owning my work and believing in myself when I'm stepping outside my comfort zone. It’s taking responsibility for my deadlines while also having the confidence to present my ideas to the whole class.",
        claim: "I have shown growth in this area by managing my time better this year and becoming more comfortable leading group discussions.",
        evidence: "Taking on responsibilities like being a team captain has really helped my self-confidence grow at QoA. I’ve learned how to lead by example and stay organized even when things get stressful. Owning my mistakes and learning from them has made me much more responsible for my own success.",
        questions: [
            {
                text: "You realize you forgot to do a homework assignment due today. What should a responsible student do?",
                answers: [
                    "Hide it and hope it's not checked",
                    "Admit the mistake and turn it in late",
                    "Blame the printer or the dog",
                    "Ask the teacher to cancel it"
                ],
                correct: 1,
                story: "Responsibility is about owning your actions, even the ones you wish you could undo."
            },
            {
                text: "What is a leadership role or responsibility I took on during my time at QoA?",
                answers: [
                    "Chief of the Pencil Sharpeners",
                    "Captain of the Basketball team",
                    "Being a Student Council rep",
                    "Master of the Silent Game"
                ],
                correct: 1,
                story: "Being the captain of the basketball team was a huge responsibility that really pushed me to grow. I had to learn how to keep the team focused during tough games and own up to my own mistakes on the court. It built my confidence in leading others and taking charge of my own actions."
            }
        ]
    },
    {
        title: "Healthy Individual",
        definition: "Being a Healthy Individual isn't just about gym class; it’s about taking care of my whole self—my body, my mind, and my friendships. It means making choices that keep me energized and ready to take on the day, whether on the field or in the classroom.",
        claim: "I have achieved this SLE by staying active in sports and learning how to handle stress in a positive way.",
        evidence: "Playing basketball and flag football at QoA has been about more than just exercise. It taught me how to stay disciplined, work as part of a team, and bounce back after a loss. These sports have helped me stay physically fit and mentally strong throughout my middle school years.",
        questions: [
            {
                text: "After a long and stressful school day, what is a healthy way to recharge?",
                answers: [
                    "Eating three bags of chips",
                    "Going for a run or playing a sport",
                    "Staying up all night on a screen",
                    "Complaining to everyone you see"
                ],
                correct: 1,
                story: "Staying active helps clear my head and keeps me ready for whatever comes next."
            },
            {
                text: "Which two sports have been the most important part of my journey to becoming a Healthy Individual?",
                answers: [
                    "Basketball and Flag Football",
                    "Fencing and Water Polo",
                    "Bowling and Chess",
                    "Soccer and Swimming"
                ],
                correct: 0,
                story: "Basketball and flag football have been my favorite ways to stay active and healthy throughout middle school. They've taught me how to handle pressure, respect my body, and balance my sports schedule with my homework. Staying physically fit has really helped me stay mentally sharp in the classroom as well.",
                pointsMultiplier: 2
            }
        ]
    }
];
const questions = sleRounds.flatMap((round, roundIndex)=>round.questions.map((question, questionIndex)=>({
            ...question,
            round: round.title,
            roundIndex,
            questionIndex
        })));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://lqfqqpkrlwgftsbncwxm.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_SLApj4E5PrzSWTXZly9Gzg_AGy_ljWF"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/game-logic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTDOWN_SECONDS",
    ()=>COUNTDOWN_SECONDS,
    "QUESTION_SECONDS",
    ()=>QUESTION_SECONDS,
    "calculateQuestionPoints",
    ()=>calculateQuestionPoints,
    "countdownLeftFor",
    ()=>countdownLeftFor,
    "generateClassCode",
    ()=>generateClassCode,
    "maxPointsFor",
    ()=>maxPointsFor,
    "pointsComment",
    ()=>pointsComment,
    "timeLeftFor",
    ()=>timeLeftFor
]);
function generateClassCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for(let i = 0; i < 6; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
const QUESTION_SECONDS = 25;
const COUNTDOWN_SECONDS = 5;
function timeLeftFor(phase, questionStartedAt) {
    if (phase !== "question") return QUESTION_SECONDS;
    const elapsed = Math.floor((Date.now() - questionStartedAt) / 1000);
    return Math.max(0, QUESTION_SECONDS - elapsed);
}
function countdownLeftFor(phase, countdownStartedAt) {
    if (phase !== "countdown") return COUNTDOWN_SECONDS;
    const elapsed = Math.floor((Date.now() - countdownStartedAt) / 1000);
    return Math.max(0, COUNTDOWN_SECONDS - elapsed);
}
function maxPointsFor(multiplier = 1) {
    return 1000 * multiplier;
}
function calculateQuestionPoints(isCorrect, multiplier = 1, timeLeft) {
    if (!isCorrect) return 0;
    const maxPoints = maxPointsFor(multiplier);
    const speedPercent = Math.max(0, Math.min(1, timeLeft / QUESTION_SECONDS));
    const percentAwarded = 0.7 + speedPercent * 0.3;
    return Math.round(maxPoints * percentAwarded);
}
function pointsComment(points, multiplier = 1) {
    const maxPoints = maxPointsFor(multiplier);
    const percent = points / maxPoints;
    if (points <= 0) return "Good try.";
    if (percent >= 0.96) return "Lightning fast!";
    if (percent >= 0.9) return "Great speed!";
    if (percent >= 0.8) return "Nice answer!";
    return "You got it!";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CircularTimer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircularTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/game-logic.ts [app-client] (ecmascript)");
;
;
function CircularTimer({ timeLeft, revealed = false, result, size = "md" }) {
    const radius = 44;
    const circumference = 2 * Math.PI * radius;
    const progress = revealed ? 1 : Math.max(0, Math.min(1, timeLeft / __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"]));
    const dashOffset = circumference * (1 - progress);
    const symbol = result === "timeout" ? "⏱" : result === "incorrect" ? "×" : "✓";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `circular-timer ${size} ${timeLeft <= 5 && !revealed ? "urgent" : ""} ${revealed ? "done" : ""} ${result ?? ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 104 104",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "timer-track",
                        cx: "52",
                        cy: "52",
                        r: radius
                    }, void 0, false, {
                        fileName: "[project]/components/CircularTimer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "timer-progress",
                        cx: "52",
                        cy: "52",
                        r: radius,
                        strokeDasharray: circumference,
                        strokeDashoffset: dashOffset
                    }, void 0, false, {
                        fileName: "[project]/components/CircularTimer.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CircularTimer.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: revealed ? symbol : timeLeft
            }, void 0, false, {
                fileName: "[project]/components/CircularTimer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CircularTimer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = CircularTimer;
var _c;
__turbopack_context__.k.register(_c, "CircularTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WaitingGame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaitingGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WaitingGame({ onHighScore }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gameWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onHighScoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onHighScore);
    const bestScoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [highScore, setHighScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaitingGame.useEffect": ()=>{
            onHighScoreRef.current = onHighScore;
        }
    }["WaitingGame.useEffect"], [
        onHighScore
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaitingGame.useEffect": ()=>{
            const canvas = canvasRef.current;
            const gameWrap = gameWrapRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Load Sprites
            const sprites = {};
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
                '9': "/assets/9.png"
            };
            let loadedCount = 0;
            const totalSources = Object.keys(sources).length;
            for (const [key, src] of Object.entries(sources)){
                const img = new Image();
                img.src = src;
                img.onload = ({
                    "WaitingGame.useEffect": ()=>{
                        loadedCount++;
                        if (loadedCount === totalSources) {
                            init();
                        }
                    }
                })["WaitingGame.useEffect"];
                img.onerror = ({
                    "WaitingGame.useEffect": ()=>{
                        loadedCount++;
                        if (loadedCount === totalSources) {
                            init();
                        }
                    }
                })["WaitingGame.useEffect"];
                sprites[key] = img;
            }
            let animationId;
            let state = "GET_READY"; // GET_READY, PLAYING, GAME_OVER
            let frames = 0;
            let currentScore = 0;
            const reportHighScore = {
                "WaitingGame.useEffect.reportHighScore": ()=>{
                    if (currentScore <= bestScoreRef.current) return;
                    bestScoreRef.current = currentScore;
                    setHighScore(currentScore);
                    window.setTimeout({
                        "WaitingGame.useEffect.reportHighScore": ()=>onHighScoreRef.current?.(currentScore)
                    }["WaitingGame.useEffect.reportHighScore"], 0);
                }
            }["WaitingGame.useEffect.reportHighScore"];
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
                draw (ctx) {
                    let animation = [
                        sprites.yellowMid,
                        sprites.yellowUp,
                        sprites.yellowMid,
                        sprites.yellowDown
                    ];
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
                flap () {
                    this.velocity = this.jump;
                },
                update () {
                    // Animation speed
                    const period = state === "GET_READY" ? 10 : 5;
                    this.frame += frames % period === 0 ? 1 : 0;
                    this.frame = this.frame % 4; // 4 animation frames
                    if (state === "GET_READY") return;
                    this.velocity += this.gravity;
                    this.y += this.velocity;
                    if (this.velocity >= this.jump) {
                        this.rotation = Math.min(Math.PI / 2, Math.max(-Math.PI / 4, this.velocity * 0.15));
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
                position: [],
                w: 52,
                h: 320,
                gap: 100,
                dx: 2,
                draw (ctx) {
                    for(let i = 0; i < this.position.length; i++){
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
                update () {
                    if (state !== "PLAYING") return;
                    if (frames % 100 === 0) {
                        this.position.push({
                            x: canvas.width,
                            y: -150 * (Math.random() + 1)
                        });
                    }
                    for(let i = 0; i < this.position.length; i++){
                        let p = this.position[i];
                        let bottomPipeYPos = p.y + this.h + this.gap;
                        // Collision detection
                        if (bird.x + bird.width / 2 > p.x && bird.x - bird.width / 2 < p.x + this.w && bird.y + bird.height / 2 > p.y && bird.y - bird.height / 2 < p.y + this.h) {
                            state = "GAME_OVER";
                            reportHighScore();
                        }
                        if (bird.x + bird.width / 2 > p.x && bird.x - bird.width / 2 < p.x + this.w && bird.y + bird.height / 2 > bottomPipeYPos && bird.y - bird.height / 2 < bottomPipeYPos + this.h) {
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
                reset () {
                    this.position = [];
                }
            };
            const bg = {
                x: 0,
                draw (ctx) {
                    ctx.drawImage(sprites.bg, this.x, 0, canvas.width, canvas.height);
                }
            };
            const fg = {
                x: 0,
                draw (ctx) {
                    ctx.drawImage(sprites.base, this.x, canvas.height - 112, 336, 112);
                },
                update () {
                    if (state === "PLAYING") {
                        this.x = (this.x - 2) % 48; // 336 - 288 = 48
                    }
                }
            };
            const drawScore = {
                "WaitingGame.useEffect.drawScore": ()=>{
                    if (state === "GET_READY") return;
                    const scoreStr = currentScore.toString();
                    let width = 0;
                    for(let i = 0; i < scoreStr.length; i++){
                        width += sprites[scoreStr[i]].width + 2;
                    }
                    let currX = canvas.width / 2 - width / 2;
                    for(let i = 0; i < scoreStr.length; i++){
                        ctx.drawImage(sprites[scoreStr[i]], currX, 50);
                        currX += sprites[scoreStr[i]].width + 2;
                    }
                }
            }["WaitingGame.useEffect.drawScore"];
            const drawMessage = {
                "WaitingGame.useEffect.drawMessage": ()=>{
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
                }
            }["WaitingGame.useEffect.drawMessage"];
            const loop = {
                "WaitingGame.useEffect.loop": ()=>{
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
                }
            }["WaitingGame.useEffect.loop"];
            const init = {
                "WaitingGame.useEffect.init": ()=>{
                    if (animationId) cancelAnimationFrame(animationId);
                    frames = 0;
                    loop();
                }
            }["WaitingGame.useEffect.init"];
            const handleInput = {
                "WaitingGame.useEffect.handleInput": (e)=>{
                    if (e) e.preventDefault();
                    switch(state){
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
                }
            }["WaitingGame.useEffect.handleInput"];
            const handleKeyDown = {
                "WaitingGame.useEffect.handleKeyDown": (e)=>{
                    if (e.code === "Space" || e.code === "ArrowUp") {
                        e.preventDefault();
                        handleInput();
                    }
                }
            }["WaitingGame.useEffect.handleKeyDown"];
            const inputTarget = gameWrap || canvas;
            inputTarget.addEventListener("pointerdown", handleInput);
            inputTarget.addEventListener("mousedown", handleInput);
            inputTarget.addEventListener("touchstart", handleInput, {
                passive: false
            });
            inputTarget.addEventListener("click", handleInput);
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "WaitingGame.useEffect": ()=>{
                    if (animationId) cancelAnimationFrame(animationId);
                    inputTarget.removeEventListener("pointerdown", handleInput);
                    inputTarget.removeEventListener("mousedown", handleInput);
                    inputTarget.removeEventListener("touchstart", handleInput);
                    inputTarget.removeEventListener("click", handleInput);
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["WaitingGame.useEffect"];
        }
    }["WaitingGame.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gameWrapRef,
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginTop: '16px',
            width: '100%',
            touchAction: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 'min(288px, 100%)',
                    fontWeight: 800,
                    color: '#a1a1aa',
                    fontSize: '0.9rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Score: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#fff'
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/components/WaitingGame.tsx",
                                lineNumber: 350,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WaitingGame.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Best: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#fff'
                                },
                                children: highScore
                            }, void 0, false, {
                                fileName: "[project]/components/WaitingGame.tsx",
                                lineNumber: 351,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WaitingGame.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: 288,
                height: 512,
                style: {
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    cursor: 'pointer',
                    touchAction: 'none',
                    width: 'min(288px, 100%)',
                    height: 'auto',
                    display: 'block'
                }
            }, void 0, false, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WaitingGame.tsx",
        lineNumber: 335,
        columnNumber: 5
    }, this);
}
_s(WaitingGame, "jXVwvmAEn+0DVIKWdUgMGpPTWsA=");
_c = WaitingGame;
var _c;
__turbopack_context__.k.register(_c, "WaitingGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quiz-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/game-logic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CircularTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CircularTimer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WaitingGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WaitingGame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const letters = [
    "A",
    "B",
    "C",
    "D"
];
const playerKey = "aadit-quiz-player-id";
function plainPlayerName(playerName = "") {
    return playerName.replace(/^\p{Emoji_Presentation}\s*/u, "").trim() || playerName;
}
function rankSuffix(rank) {
    const lastTwo = rank % 100;
    if (lastTwo >= 11 && lastTwo <= 13) return "th";
    if (rank % 10 === 1) return "st";
    if (rank % 10 === 2) return "nd";
    if (rank % 10 === 3) return "rd";
    return "th";
}
function PlayerPage() {
    _s();
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [player, setPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [joining, setJoining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendingAnswer, setSendingAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [joinStep, setJoinStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("code");
    const [answerChoice, setAnswerChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"]);
    const [avatarEmoji, setAvatarEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [flappyScores, setFlappyScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLeaveConfirm, setShowLeaveConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gamePlayers, setGamePlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answerPoints, setAnswerPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [countdownLeft, setCountdownLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTDOWN_SECONDS"]);
    const faceEmojis = [
        "😎",
        "🤓",
        "🤠",
        "🥳",
        "👽",
        "🤖",
        "👻",
        "🦄",
        "🦁",
        "🐶",
        "🦊",
        "🦖",
        "🚀",
        "⭐",
        "🌟",
        "🏆",
        "🎓",
        "🎯",
        "🧠",
        "📚"
    ];
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const question = game ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"][game.current_question] : null;
    const answerResult = game?.revealed && question ? answerChoice === null ? "timeout" : answerChoice === question.correct ? "correct" : "incorrect" : undefined;
    const finalLeaderboard = Boolean(game && question && game.current_question >= game.question_count - 1 && game.pending_sle_index === question.roundIndex);
    const rankedGamePlayers = [
        ...gamePlayers
    ].sort((a, b)=>b.score - a.score);
    const playerRankIndex = player ? rankedGamePlayers.findIndex((entry)=>entry.id === player.id) : -1;
    const playerRank = playerRankIndex >= 0 ? playerRankIndex + 1 : null;
    const playerAhead = playerRankIndex > 0 ? rankedGamePlayers[playerRankIndex - 1] : null;
    const pointsBehind = player && playerAhead ? Math.max(0, playerAhead.score - player.score) : 0;
    // Sync timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerPage.useEffect": ()=>{
            if (!game) return;
            setTimeLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLeftFor"])(game.phase, game.question_started_at));
            if (game.phase !== 'question' || game.revealed) return;
            const id = setInterval({
                "PlayerPage.useEffect.id": ()=>{
                    setTimeLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLeftFor"])(game.phase, game.question_started_at));
                }
            }["PlayerPage.useEffect.id"], 500);
            return ({
                "PlayerPage.useEffect": ()=>clearInterval(id)
            })["PlayerPage.useEffect"];
        }
    }["PlayerPage.useEffect"], [
        game?.phase,
        game?.revealed,
        game?.question_started_at
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerPage.useEffect": ()=>{
            if (!game) return;
            setCountdownLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countdownLeftFor"])(game.phase, game.question_started_at));
            if (game.phase !== 'countdown') return;
            const id = setInterval({
                "PlayerPage.useEffect.id": ()=>{
                    setCountdownLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countdownLeftFor"])(game.phase, game.question_started_at));
                }
            }["PlayerPage.useEffect.id"], 250);
            return ({
                "PlayerPage.useEffect": ()=>clearInterval(id)
            })["PlayerPage.useEffect"];
        }
    }["PlayerPage.useEffect"], [
        game?.phase,
        game?.question_started_at
    ]);
    // Real-time game updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerPage.useEffect": ()=>{
            if (!game) return;
            const channel = supabase.channel(`player-${game.id}`).on('postgres_changes', {
                event: 'UPDATE',
                schema: 'public',
                table: 'games',
                filter: `id=eq.${game.id}`
            }, {
                "PlayerPage.useEffect.channel": (payload)=>{
                    const nextGame = payload.new;
                    setGame({
                        "PlayerPage.useEffect.channel": (currentGame)=>{
                            if (currentGame && (nextGame.current_question !== currentGame.current_question || nextGame.phase !== currentGame.phase)) {
                                setAnswerChoice(null);
                                setAnswerPoints(0);
                            }
                            return nextGame;
                        }
                    }["PlayerPage.useEffect.channel"]);
                }
            }["PlayerPage.useEffect.channel"]).on('postgres_changes', {
                event: 'UPDATE',
                schema: 'public',
                table: 'players',
                filter: `id=eq.${player?.id}`
            }, {
                "PlayerPage.useEffect.channel": (payload)=>{
                    setPlayer({
                        "PlayerPage.useEffect.channel": (prev)=>prev ? {
                                ...prev,
                                score: payload.new.score
                            } : null
                    }["PlayerPage.useEffect.channel"]);
                }
            }["PlayerPage.useEffect.channel"]).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'players',
                filter: `game_id=eq.${game.id}`
            }, {
                "PlayerPage.useEffect.channel": (payload)=>{
                    if (payload.eventType === 'DELETE') {
                        setGamePlayers({
                            "PlayerPage.useEffect.channel": (prev)=>prev.filter({
                                    "PlayerPage.useEffect.channel": (entry)=>entry.id !== payload.old.id
                                }["PlayerPage.useEffect.channel"])
                        }["PlayerPage.useEffect.channel"]);
                        return;
                    }
                    const nextPlayer = {
                        id: payload.new.id,
                        name: payload.new.name,
                        score: payload.new.score
                    };
                    setGamePlayers({
                        "PlayerPage.useEffect.channel": (prev)=>{
                            const exists = prev.some({
                                "PlayerPage.useEffect.channel.exists": (entry)=>entry.id === nextPlayer.id
                            }["PlayerPage.useEffect.channel.exists"]);
                            if (exists) return prev.map({
                                "PlayerPage.useEffect.channel": (entry)=>entry.id === nextPlayer.id ? nextPlayer : entry
                            }["PlayerPage.useEffect.channel"]);
                            return [
                                ...prev,
                                nextPlayer
                            ];
                        }
                    }["PlayerPage.useEffect.channel"]);
                }
            }["PlayerPage.useEffect.channel"]).subscribe();
            return ({
                "PlayerPage.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["PlayerPage.useEffect"];
        }
    }["PlayerPage.useEffect"], [
        game?.id,
        player?.id
    ]);
    // Flappy Bird score broadcast channel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerPage.useEffect": ()=>{
            if (!game || !player) return;
            const ch = supabase.channel(`flappy-${game.id}`);
            ch.on('broadcast', {
                event: 'flappy_score'
            }, {
                "PlayerPage.useEffect": ({ payload })=>{
                    setFlappyScores({
                        "PlayerPage.useEffect": (prev)=>{
                            const existing = prev.find({
                                "PlayerPage.useEffect.existing": (s)=>s.id === payload.id
                            }["PlayerPage.useEffect.existing"]);
                            if (existing) {
                                // Update name/emoji even if score isn't higher, to keep it in sync
                                const updated = prev.map({
                                    "PlayerPage.useEffect.updated": (s)=>s.id === payload.id ? {
                                            ...s,
                                            name: payload.name,
                                            score: Math.max(s.score, payload.score)
                                        } : s
                                }["PlayerPage.useEffect.updated"]);
                                return updated.sort({
                                    "PlayerPage.useEffect": (a, b)=>b.score - a.score
                                }["PlayerPage.useEffect"]);
                            }
                            return [
                                ...prev,
                                {
                                    id: payload.id,
                                    name: payload.name,
                                    score: payload.score
                                }
                            ].sort({
                                "PlayerPage.useEffect": (a, b)=>b.score - a.score
                            }["PlayerPage.useEffect"]);
                        }
                    }["PlayerPage.useEffect"]);
                }
            }["PlayerPage.useEffect"]).subscribe();
            return ({
                "PlayerPage.useEffect": ()=>{
                    supabase.removeChannel(ch);
                }
            })["PlayerPage.useEffect"];
        }
    }["PlayerPage.useEffect"], [
        game?.id,
        player?.id
    ]);
    const handleFlappyHighScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerPage.useCallback[handleFlappyHighScore]": (score)=>{
            if (!game || !player) return;
            const displayName = player.name;
            // Instantly update local state
            setFlappyScores({
                "PlayerPage.useCallback[handleFlappyHighScore]": (prev)=>{
                    const existing = prev.find({
                        "PlayerPage.useCallback[handleFlappyHighScore].existing": (s)=>s.id === player.id
                    }["PlayerPage.useCallback[handleFlappyHighScore].existing"]);
                    if (existing) {
                        const updated = prev.map({
                            "PlayerPage.useCallback[handleFlappyHighScore].updated": (s)=>s.id === player.id ? {
                                    ...s,
                                    name: displayName,
                                    score: Math.max(s.score, score)
                                } : s
                        }["PlayerPage.useCallback[handleFlappyHighScore].updated"]);
                        return updated.sort({
                            "PlayerPage.useCallback[handleFlappyHighScore]": (a, b)=>b.score - a.score
                        }["PlayerPage.useCallback[handleFlappyHighScore]"]);
                    }
                    return [
                        ...prev,
                        {
                            id: player.id,
                            name: displayName,
                            score
                        }
                    ].sort({
                        "PlayerPage.useCallback[handleFlappyHighScore]": (a, b)=>b.score - a.score
                    }["PlayerPage.useCallback[handleFlappyHighScore]"]);
                }
            }["PlayerPage.useCallback[handleFlappyHighScore]"]);
            // Broadcast
            supabase.channel(`flappy-${game.id}`).send({
                type: 'broadcast',
                event: 'flappy_score',
                payload: {
                    id: player.id,
                    name: displayName,
                    score
                }
            });
        }
    }["PlayerPage.useCallback[handleFlappyHighScore]"], [
        game?.id,
        player
    ]);
    async function handleCodeNext() {
        if (!code.trim()) {
            setMessage("Enter a class code to continue.");
            return;
        }
        setMessage("Checking code...");
        const { data, error } = await supabase.from('games').select('*').eq('code', code.trim().toUpperCase()).single();
        if (error || !data) {
            setMessage("Class code not found.");
            return;
        }
        setGame(data);
        const { data: playersData } = await supabase.from('players').select('id,name,score').eq('game_id', data.id);
        setGamePlayers(playersData || []);
        setMessage("");
        setJoinStep("name");
    }
    async function handleNameSubmit() {
        if (!name.trim()) {
            setMessage("Enter your name to join.");
            return;
        }
        if (!game) return;
        setJoining(true);
        setMessage("");
        try {
            // Check for duplicate names
            const { data: existing } = await supabase.from('players').select('id').eq('game_id', game.id).ilike('name', `%${name.trim()}%`);
            if (existing && existing.length > 0) {
                setMessage("That name is already taken. Try a different one!");
                setJoining(false);
                return;
            }
            const playerId = `p_${Date.now()}_${Math.random().toString(16).slice(2)}`;
            const { error } = await supabase.from('players').insert({
                id: playerId,
                game_id: game.id,
                name: name.trim().slice(0, 18),
                joined_at: Date.now()
            });
            if (error) {
                setMessage("Could not join game.");
                return;
            }
            window.localStorage.setItem(playerKey, playerId);
            const newPlayer = {
                id: playerId,
                name: name.trim().slice(0, 18),
                score: 0
            };
            setPlayer(newPlayer);
            setGamePlayers((prev)=>[
                    ...prev,
                    newPlayer
                ]);
        } finally{
            setJoining(false);
        }
    }
    async function submitAnswer(choice) {
        if (!player || !game || answerChoice !== null || game.revealed) return;
        setSendingAnswer(choice);
        try {
            const isCorrect = question?.correct === choice;
            const timeRemaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeLeftFor"])(game.phase, game.question_started_at);
            const earnedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateQuestionPoints"])(Boolean(isCorrect), question?.pointsMultiplier ?? 1, timeRemaining);
            const { error } = await supabase.from('answers').insert({
                game_id: game.id,
                player_id: player.id,
                question_index: game.current_question,
                choice,
                correct: isCorrect
            });
            if (!error) {
                setAnswerChoice(choice);
                setAnswerPoints(earnedPoints);
                if (earnedPoints > 0) {
                    const nextScore = player.score + earnedPoints;
                    setPlayer({
                        ...player,
                        score: nextScore
                    });
                    setGamePlayers((prev)=>prev.map((entry)=>entry.id === player.id ? {
                                ...entry,
                                score: nextScore
                            } : entry));
                    await supabase.from('players').update({
                        score: nextScore
                    }).eq('id', player.id);
                }
            }
        } finally{
            setSendingAnswer(null);
        }
    }
    async function updateEmoji(emoji) {
        if (!player || !game) return;
        setAvatarEmoji(emoji);
        const updatedName = `${emoji} ${name.trim()}`;
        const { error } = await supabase.from('players').update({
            name: updatedName
        }).eq('id', player.id);
        if (!error) {
            setPlayer({
                ...player,
                name: updatedName
            });
            // If they are on the leaderboard, update their entry for everyone
            const myScore = flappyScores.find((s)=>s.id === player.id);
            if (myScore) {
                supabase.channel(`flappy-${game.id}`).send({
                    type: 'broadcast',
                    event: 'flappy_score',
                    payload: {
                        id: player.id,
                        name: updatedName,
                        score: myScore.score
                    }
                });
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
    }
    const joined = Boolean(player && game);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app",
        children: [
            !joined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "join-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "step-indicator",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `step-dot ${joinStep === "code" ? "active" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `step-dot ${joinStep === "name" ? "active" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stack stack-sm text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: joinStep === "code" ? "Join Quiz" : "What's Your Name?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle",
                                    children: joinStep === "code" ? "Enter the class code shown on the projector." : "This is how you'll appear on the leaderboard."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "join-form",
                            children: [
                                joinStep === "code" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "code-input",
                                                    children: "Class Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "code-input",
                                                    className: "input-field",
                                                    value: code,
                                                    onChange: (e)=>setCode(e.target.value.toUpperCase()),
                                                    onKeyDown: (e)=>e.key === "Enter" && handleCodeNext(),
                                                    maxLength: 8,
                                                    placeholder: "e.g. AADIT",
                                                    autoCapitalize: "characters",
                                                    autoCorrect: "off",
                                                    autoComplete: "off",
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary btn-full btn-lg",
                                            style: {
                                                touchAction: 'manipulation'
                                            },
                                            onClick: handleCodeNext,
                                            children: "Next →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                joinStep === "name" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name-input",
                                                    children: "Your Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "name-input",
                                                    className: "input-field",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    onKeyDown: (e)=>e.key === "Enter" && handleNameSubmit(),
                                                    maxLength: 18,
                                                    placeholder: "Enter your name",
                                                    autoComplete: "name",
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary btn-full btn-lg",
                                            style: {
                                                touchAction: 'manipulation'
                                            },
                                            disabled: joining,
                                            onClick: handleNameSubmit,
                                            children: joining ? "Joining..." : "Join"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-ghost",
                                            onClick: ()=>{
                                                setJoinStep("code");
                                                setMessage("");
                                            },
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "message error",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 335,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 334,
                columnNumber: 9
            }, this),
            joined && game?.phase === "lobby" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "lobby-full-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "waiting-title-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "waiting-title",
                            children: "Waiting for host to start..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lobby-code-badge",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge",
                            style: {
                                fontSize: '0.8rem'
                            },
                            children: [
                                "Code: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: game.code
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 431,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 430,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lobby-grid",
                        style: {
                            marginTop: '60px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lobby-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Customize Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted text-sm",
                                        children: "This shows on the leaderboard!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "emoji-grid",
                                        children: faceEmojis.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `emoji-btn ${avatarEmoji === emoji ? 'selected' : ''}`,
                                                onClick: ()=>updateEmoji(emoji),
                                                children: emoji
                                            }, emoji, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lobby-panel center-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "badge accent center-x",
                                        style: {
                                            marginBottom: '16px'
                                        },
                                        children: "You're In"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: plainPlayerName(player?.name)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
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
                                        },
                                        children: avatarEmoji || "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-danger leave-lobby-btn",
                                        onClick: ()=>setShowLeaveConfirm(true),
                                        children: "Leave"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lobby-panel game-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WaitingGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onHighScore: handleFlappyHighScore
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '12px',
                                            width: '288px',
                                            background: 'rgba(0,0,0,0.2)',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            border: '1px solid var(--border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    color: 'var(--text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.06em',
                                                    marginBottom: '8px'
                                                },
                                                children: "🏆 Flappy Leaderboard"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, this),
                                            flappyScores.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.8rem',
                                                    color: 'var(--text-muted)',
                                                    fontStyle: 'italic',
                                                    textAlign: 'center',
                                                    padding: '16px 0'
                                                },
                                                children: "Waiting for scores..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '6px'
                                                },
                                                children: flappyScores.slice(0, 5).map((s, i)=>{
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
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            padding: '8px 12px',
                                                            background: isFirst ? 'rgba(250, 204, 21, 0.1)' : isMe ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255,255,255,0.04)',
                                                            borderRadius: '8px',
                                                            border: isFirst ? '1px solid rgba(250, 204, 21, 0.3)' : isMe ? '1px solid var(--accent)' : '1px solid var(--border)',
                                                            boxShadow: isFirst ? '0 4px 12px rgba(250, 204, 21, 0.1)' : 'none'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '10px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 800,
                                                                            color: isFirst ? '#facc15' : 'var(--text-muted)',
                                                                            fontSize: '0.9rem',
                                                                            width: '12px'
                                                                        },
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 517,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '32px',
                                                                            height: '32px',
                                                                            background: 'rgba(255,255,255,0.1)',
                                                                            borderRadius: '8px',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            fontSize: '1.2rem'
                                                                        },
                                                                        children: emoji
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: isFirst || isMe ? 700 : 500,
                                                                            color: isFirst ? '#facc15' : 'var(--text)',
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap',
                                                                            maxWidth: '110px',
                                                                            fontSize: '0.9rem'
                                                                        },
                                                                        children: [
                                                                            baseName,
                                                                            " ",
                                                                            isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: '0.75rem',
                                                                                    color: 'var(--text-muted)',
                                                                                    marginLeft: '4px',
                                                                                    fontWeight: 500
                                                                                },
                                                                                children: "(You)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 539,
                                                                                columnNumber: 51
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 800,
                                                                    fontSize: '1rem',
                                                                    color: isFirst ? '#facc15' : 'var(--text)'
                                                                },
                                                                children: s.score
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, s.name, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this),
                    showLeaveConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-overlay",
                        onClick: ()=>setShowLeaveConfirm(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-card leave-confirm-card",
                            onClick: (event)=>event.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-icon",
                                    children: "?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Leave the game?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted",
                                    children: "Do you actually want to leave? You can rejoin with the class code."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 560,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-ghost",
                                            onClick: ()=>setShowLeaveConfirm(false),
                                            children: "Stay"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-danger",
                                            onClick: leaveGame,
                                            children: "Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 557,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 556,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, this),
            joined && game?.phase === "welcome" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "player-full-screen player-message-screen welcome-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge accent center-x",
                        children: "Welcome"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 574,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Get Ready"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 575,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "How Well Do You Know Aadit?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 576,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 573,
                columnNumber: 9
            }, this),
            joined && game?.phase === "countdown" && question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "player-full-screen countdown-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-kicker",
                        children: "Next Question"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, this),
                    question.pointsMultiplier === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "double-points-badge angled",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Double Points"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 588,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "×2"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 589,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 587,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-number",
                        children: countdownLeft
                    }, countdownLeft, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-round",
                        children: question.round
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 595,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 582,
                columnNumber: 9
            }, this),
            joined && game?.phase === "question" && question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "player-full-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "player-answer-topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "player-pill-label",
                                        children: "Player"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "player-pill-value",
                                        children: player?.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 603,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CircularTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                timeLeft: timeLeft,
                                revealed: game.revealed,
                                result: answerResult,
                                size: "md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 607,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "player-pill-label",
                                        children: "Score"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 609,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "player-pill-value",
                                        children: player?.score ?? 0
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 608,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 602,
                        columnNumber: 11
                    }, this),
                    !(answerChoice !== null && !game.revealed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "player-center-copy",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: game.revealed ? answerResult === "timeout" ? "Time's Up" : answerResult === "correct" ? "Correct" : "Not Quite" : "Tap Your Answer"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 616,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 615,
                        columnNumber: 13
                    }, this),
                    answerChoice === null && !game.revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "player-answer-grid-full",
                        children: question.answers.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `player-answer-tile ${letters[index].toLowerCase()}`,
                                disabled: sendingAnswer !== null,
                                onClick: ()=>submitAnswer(index),
                                "aria-label": `Answer ${letters[index]}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "player-answer-letter",
                                    children: letters[index]
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 638,
                                    columnNumber: 19
                                }, this)
                            }, option, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 631,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 629,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `player-locked-panel ${answerResult ?? ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-locked-icon",
                                children: game.revealed ? answerResult === "timeout" ? "⏱" : answerResult === "correct" ? "✓" : "×" : "✓"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 644,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-locked-title",
                                children: game.revealed ? answerResult === "timeout" ? "Time's Up!" : answerResult === "correct" ? "You got it!" : "Good try!" : "Locked In!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 647,
                                columnNumber: 15
                            }, this),
                            game.revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `points-earned ${answerPoints > 0 ? "positive" : "zero"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: answerPoints > 0 ? `+${answerPoints.toLocaleString()}` : "+0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 658,
                                        columnNumber: 19
                                    }, this),
                                    answerPoints > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointsComment"])(answerPoints, question.pointsMultiplier ?? 1)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 657,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 643,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 601,
                columnNumber: 9
            }, this),
            joined && game?.phase === "sle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "player-full-screen player-message-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge accent center-x",
                        children: "SLE Moment"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 670,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Look at the Projector"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 671,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "The host is presenting a Student Learning Expectation."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 672,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 669,
                columnNumber: 9
            }, this),
            joined && game?.phase === "leaderboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "player-full-screen player-message-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge green center-x",
                        children: finalLeaderboard ? "Game Over" : "Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 679,
                        columnNumber: 11
                    }, this),
                    playerRank && playerRank <= 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "You're #",
                                    playerRank
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 682,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    player?.score ?? 0,
                                    " points"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 683,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: playerRank ? `You are ${playerRank}${rankSuffix(playerRank)}` : "You're playing"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 687,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: playerAhead ? `${pointsBehind.toLocaleString()} points behind ${plainPlayerName(playerAhead.name)}` : `${player?.score ?? 0} points`
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 688,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 678,
                columnNumber: 9
            }, this),
            joined && game?.phase === "thanks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "player-full-screen player-message-screen thanks-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge green center-x",
                        children: "Thank You"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 701,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Thanks for Playing"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 702,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Great job, ",
                            plainPlayerName(player?.name),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 703,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 700,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
_s(PlayerPage, "F1ZRBHIvYYQb/dBpkO2BJwDoK7k=");
_c = PlayerPage;
var _c;
__turbopack_context__.k.register(_c, "PlayerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0k.7083._.js.map