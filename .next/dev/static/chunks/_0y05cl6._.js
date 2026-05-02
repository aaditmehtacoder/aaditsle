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
                story: "Getting the real-time leaderboard to work was definitely the biggest challenge of this whole project. I spent hours debugging the code and testing it with my friends to make sure every tap was recorded correctly. It taught me that being an Active Learner is all about sticking with a problem until it's solved."
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
                story: "Basketball and flag football have been my favorite ways to stay active and healthy throughout middle school. They've taught me how to handle pressure, respect my body, and balance my sports schedule with my homework. Staying physically fit has really helped me stay mentally sharp in the classroom as well."
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
    "QUESTION_SECONDS",
    ()=>QUESTION_SECONDS,
    "generateClassCode",
    ()=>generateClassCode,
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
function timeLeftFor(phase, questionStartedAt) {
    if (phase !== "question") return QUESTION_SECONDS;
    const elapsed = Math.floor((Date.now() - questionStartedAt) / 1000);
    return Math.max(0, QUESTION_SECONDS - elapsed);
}
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
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [highScore, setHighScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaitingGame.useEffect": ()=>{
            const canvas = canvasRef.current;
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
                sprites[key] = img;
            }
            let animationId;
            let state = "GET_READY"; // GET_READY, PLAYING, GAME_OVER
            let frames = 0;
            let currentScore = 0;
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
                            if (currentScore > highScore) setHighScore(currentScore);
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
                            if (currentScore > highScore) setHighScore(currentScore);
                        }
                        if (bird.x + bird.width / 2 > p.x && bird.x - bird.width / 2 < p.x + this.w && bird.y + bird.height / 2 > bottomPipeYPos && bird.y - bird.height / 2 < bottomPipeYPos + this.h) {
                            state = "GAME_OVER";
                            if (currentScore > highScore) setHighScore(currentScore);
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
            canvas.addEventListener("mousedown", handleInput);
            canvas.addEventListener("touchstart", handleInput, {
                passive: false
            });
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "WaitingGame.useEffect": ()=>{
                    if (animationId) cancelAnimationFrame(animationId);
                    canvas.removeEventListener("mousedown", handleInput);
                    canvas.removeEventListener("touchstart", handleInput);
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["WaitingGame.useEffect"];
        }
    }["WaitingGame.useEffect"], [
        highScore
    ]);
    // Notify parent when highScore changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaitingGame.useEffect": ()=>{
            if (highScore > 0 && onHighScore) {
                onHighScore(highScore);
            }
        }
    }["WaitingGame.useEffect"], [
        highScore,
        onHighScore
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginTop: '16px',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '288px',
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
                                lineNumber: 317,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WaitingGame.tsx",
                        lineNumber: 317,
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
                                lineNumber: 318,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WaitingGame.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 316,
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
                    touchAction: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/WaitingGame.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WaitingGame.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s(WaitingGame, "UE6MSrRje6ToPxqti6X+PpHpQOg=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WaitingGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WaitingGame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    // Sync timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerPage.useEffect": ()=>{
            if (!game || game.phase !== 'question' || game.revealed) return;
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
                    if (nextGame.current_question !== game.current_question || nextGame.phase !== game.phase) {
                        setAnswerChoice(null);
                    }
                    setGame(nextGame);
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
            setPlayer({
                id: playerId,
                name: name.trim().slice(0, 18),
                score: 0
            });
        } finally{
            setJoining(false);
        }
    }
    async function submitAnswer(choice) {
        if (!player || !game || answerChoice !== null || game.revealed) return;
        setSendingAnswer(choice);
        try {
            const isCorrect = question?.correct === choice;
            const { error } = await supabase.from('answers').insert({
                game_id: game.id,
                player_id: player.id,
                question_index: game.current_question,
                choice,
                correct: isCorrect
            });
            if (!error) {
                setAnswerChoice(choice);
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
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `step-dot ${joinStep === "name" ? "active" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stack stack-sm text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: joinStep === "code" ? "Join Quiz" : "What's Your Name?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle",
                                    children: joinStep === "code" ? "Enter the class code shown on the projector." : "This is how you'll appear on the leaderboard."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 250,
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
                                                    lineNumber: 263,
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
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 262,
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
                                            lineNumber: 278,
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
                                                    lineNumber: 291,
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
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 290,
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
                                            lineNumber: 304,
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
                                            lineNumber: 312,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "message error",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 243,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this),
            joined && game?.phase === "lobby" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "lobby-full-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '5vh',
                            left: '0',
                            right: '0',
                            textAlign: 'center',
                            pointerEvents: 'none',
                            zIndex: 10
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'white',
                                opacity: 0.9,
                                textShadow: '0 0 30px rgba(99,102,241,0.6)'
                            },
                            children: "Waiting for host to start..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 332,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '16px',
                            left: '24px'
                        },
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
                                    lineNumber: 347,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 346,
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
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted text-sm",
                                        children: "This shows on the leaderboard!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 354,
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
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 352,
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
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Hey, ",
                                            player?.name,
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 372,
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
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-ghost",
                                        onClick: leaveGame,
                                        style: {
                                            marginTop: '24px'
                                        },
                                        children: "Leave & Rejoin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lobby-panel game-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WaitingGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onHighScore: handleFlappyHighScore
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 397,
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
                                                lineNumber: 401,
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
                                                lineNumber: 403,
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
                                                                        lineNumber: 433,
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
                                                                        lineNumber: 434,
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
                                                                                lineNumber: 455,
                                                                                columnNumber: 51
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 446,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 432,
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
                                                                lineNumber: 458,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, s.name, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this),
            joined && game?.phase === "question" && question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    padding: "16px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "player-status-bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: player?.name
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: game.revealed ? "✓ Revealed" : `${timeLeft}s`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 477,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center stack stack-sm",
                            style: {
                                margin: '20px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                                        fontWeight: 900,
                                        marginBottom: '4px'
                                    },
                                    children: answerChoice !== null ? "Locked In ✓" : "Tap Your Answer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this),
                                answerChoice === null && !game.revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        color: 'var(--accent)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    },
                                    children: "Think you got it?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted text-sm",
                                    children: game.revealed ? "Look at the projector for the story." : "The full question is on the host screen."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 482,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "answer-grid",
                            children: question.answers.map((option, index)=>{
                                const selected = answerChoice === index;
                                const correct = game.revealed && question.correct === index;
                                const wrong = game.revealed && question.correct !== index;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `answer-btn flex-col ${letters[index].toLowerCase()} ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "dim" : ""}`,
                                    disabled: answerChoice !== null || game.revealed || sendingAnswer !== null,
                                    onClick: ()=>submitAnswer(index),
                                    "aria-label": `Answer ${letters[index]}`,
                                    style: {
                                        touchAction: 'manipulation',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '12px',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "answer-letter",
                                            children: letters[index]
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "answer-text",
                                            style: {
                                                fontSize: '1.2rem',
                                                fontWeight: 700,
                                                lineHeight: 1.2
                                            },
                                            children: option
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, option, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this),
                        answerChoice !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-muted text-sm",
                            children: "Answer saved. Watch the projector for the reveal."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 521,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 476,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 475,
                columnNumber: 9
            }, this),
            joined && game?.phase === "sle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "waiting-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge accent center-x",
                            children: "SLE Moment"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Look at the Projector"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtitle",
                            children: "The host is presenting a Student Learning Expectation."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 535,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 532,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 531,
                columnNumber: 9
            }, this),
            joined && game?.phase === "leaderboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "waiting-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge green center-x",
                            children: "Game Over"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 546,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                player?.score ?? 0,
                                " Points"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtitle",
                            children: "Check the projector for the final leaderboard!"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 548,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 545,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 544,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(PlayerPage, "mRk9ONuX85VjtJnMJ3vU2MhYOpQ=");
_c = PlayerPage;
var _c;
__turbopack_context__.k.register(_c, "PlayerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0y05cl6._.js.map