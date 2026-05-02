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
        definition: "A Caring Christian is someone who notices others, chooses kindness, and tries to live their faith through action.",
        claim: "I show this SLE by helping classmates, respecting my community, and looking for ways to make QoA better.",
        evidence: "Placeholder evidence: add a service moment, classroom example, retreat memory, or faith-based story here.",
        questions: [
            {
                text: "Which action best shows Aadit being a Caring Christian?",
                answers: [
                    "Helping someone feel included",
                    "Winning every argument",
                    "Ignoring group work",
                    "Only helping friends"
                ],
                correct: 0,
                story: "Story placeholder: explain a time you helped, included someone, or showed kindness at QoA."
            },
            {
                text: "At QoA, Caring Christian means faith is shown through...",
                answers: [
                    "Only words",
                    "Actions and choices",
                    "Perfect grades",
                    "Being the loudest"
                ],
                correct: 1,
                story: "Story placeholder: connect this to how you try to treat people in school."
            },
            {
                text: "What is one way Aadit can support his community?",
                answers: [
                    "Complaining first",
                    "Serving others",
                    "Skipping responsibilities",
                    "Keeping talents hidden"
                ],
                correct: 1,
                story: "Story placeholder: add an example from a project, Mass, buddy work, or service opportunity."
            }
        ]
    },
    {
        title: "Active Learner",
        definition: "An Active Learner asks questions, solves problems, and keeps improving even when the work gets tricky.",
        claim: "I show this SLE by building, testing, revising, and learning from mistakes instead of giving up.",
        evidence: "This quiz game is evidence because it combines planning, design, technology, writing, and presentation skills.",
        questions: [
            {
                text: "What did Aadit build for his graduation project?",
                answers: [
                    "A science volcano",
                    "This multiplayer quiz game",
                    "A cookbook",
                    "A movie poster"
                ],
                correct: 1,
                story: "This is the game everyone is playing right now. Explain how you planned it, tested it, and made it presentation-ready."
            },
            {
                text: "What does an Active Learner do after something fails?",
                answers: [
                    "Quit immediately",
                    "Blame the computer",
                    "Try, test, and revise",
                    "Pretend it worked"
                ],
                correct: 2,
                story: "Story placeholder: mention a bug, challenge, or revision you made while creating this project."
            },
            {
                text: "Which skill helped Aadit most while building this?",
                answers: [
                    "Problem solving",
                    "Telepathy",
                    "Avoiding feedback",
                    "Random guessing"
                ],
                correct: 0,
                story: "Story placeholder: explain how problem solving helped with the game flow, design, or questions."
            }
        ]
    },
    {
        title: "Self-Confident & Responsible",
        definition: "Being Self-Confident and Responsible means trusting your abilities while owning your choices, work, and growth.",
        claim: "I show this SLE by preparing, following through, and presenting my story with confidence.",
        evidence: "Placeholder evidence: add a leadership moment, deadline you met, responsibility you handled, or presentation challenge you overcame.",
        questions: [
            {
                text: "What is a responsible move before presenting an SLE project?",
                answers: [
                    "Practice and prepare",
                    "Hope nobody notices",
                    "Delete the slides",
                    "Arrive late"
                ],
                correct: 0,
                story: "Story placeholder: talk about how you prepared for your presentation."
            },
            {
                text: "Self-confidence means Aadit should...",
                answers: [
                    "Never ask for help",
                    "Believe he can grow",
                    "Act perfect all the time",
                    "Avoid challenges"
                ],
                correct: 1,
                story: "Story placeholder: describe a moment when confidence helped you try something new."
            },
            {
                text: "A responsible teammate is someone who...",
                answers: [
                    "Does their part",
                    "Lets others do everything",
                    "Changes the plan secretly",
                    "Disappears at crunch time"
                ],
                correct: 0,
                story: "Story placeholder: add an example from a group project, sports team, or classroom activity."
            }
        ]
    },
    {
        title: "Healthy Individual",
        definition: "A Healthy Individual takes care of mind, body, friendships, and habits so they can be their best self.",
        claim: "I show this SLE by staying active, balancing school with sports, and learning from both wins and losses.",
        evidence: "Basketball and flag football are evidence because they help me practice teamwork, effort, discipline, and resilience.",
        questions: [
            {
                text: "Which sports connect to Aadit's Healthy Individual SLE?",
                answers: [
                    "Basketball and flag football",
                    "Curling and fencing",
                    "Water polo and skiing",
                    "Bowling and chess boxing"
                ],
                correct: 0,
                story: "Talk about basketball and flag football: teamwork, staying active, handling pressure, and having fun."
            },
            {
                text: "A Healthy Individual balances sports with...",
                answers: [
                    "No sleep",
                    "Homework and rest",
                    "Skipping meals",
                    "Never taking breaks"
                ],
                correct: 1,
                story: "Story placeholder: explain how you balance school, activities, family, and rest."
            },
            {
                text: "When a game or day goes badly, a healthy response is to...",
                answers: [
                    "Learn and reset",
                    "Give up forever",
                    "Blame everyone",
                    "Ignore feelings"
                ],
                correct: 0,
                story: "Story placeholder: describe what you learned from a tough game, mistake, or stressful week."
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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
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
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `step-dot ${joinStep === "name" ? "active" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stack stack-sm text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: joinStep === "code" ? "Join Quiz" : "What's Your Name?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle",
                                    children: joinStep === "code" ? "Enter the class code shown on the projector." : "This is how you'll appear on the leaderboard."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 169,
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
                                                    lineNumber: 182,
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
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 181,
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
                                            lineNumber: 197,
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
                                                    lineNumber: 210,
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
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 209,
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
                                            lineNumber: 223,
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
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "message error",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            joined && game?.phase === "lobby" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "waiting-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "avatar-circle",
                            children: player?.name.slice(0, 1).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stack stack-sm text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge accent center-x",
                                    children: "You're In"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 254,
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
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle",
                                    children: "Waiting for the host to start the quiz. Keep this screen open."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-ghost",
                            onClick: leaveGame,
                            children: "Leave & Rejoin"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 248,
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
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: game.revealed ? "✓ Revealed" : `${timeLeft}s`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center stack stack-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: answerChoice !== null ? "Locked In ✓" : "Tap Your Answer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted text-sm",
                                    children: game.revealed ? "Look at the projector for the story." : "The full question is on the host screen."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "answer-grid",
                            children: question.answers.map((option, index)=>{
                                const selected = answerChoice === index;
                                const correct = game.revealed && question.correct === index;
                                const wrong = game.revealed && question.correct !== index;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `answer-btn ${letters[index].toLowerCase()} ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "dim" : ""}`,
                                    disabled: answerChoice !== null || game.revealed || sendingAnswer !== null,
                                    onClick: ()=>submitAnswer(index),
                                    "aria-label": `Answer ${letters[index]}`,
                                    style: {
                                        touchAction: 'manipulation'
                                    },
                                    children: letters[index]
                                }, option, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this),
                        answerChoice !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-muted text-sm",
                            children: "Answer saved. Watch the projector for the reveal."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 307,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 270,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 269,
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
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Look at the Projector"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtitle",
                            children: "The host is presenting a Student Learning Expectation."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 317,
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
                            lineNumber: 332,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                player?.score ?? 0,
                                " Points"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtitle",
                            children: "Check the projector for the final leaderboard!"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 331,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(PlayerPage, "8Hwy9a/Qf47VKcrT9dBLfDMGMoc=");
_c = PlayerPage;
var _c;
__turbopack_context__.k.register(_c, "PlayerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0ad34z-._.js.map