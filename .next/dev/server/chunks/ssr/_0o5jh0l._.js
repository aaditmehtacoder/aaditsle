module.exports = [
"[project]/lib/quiz-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questions",
    ()=>questions,
    "sleRounds",
    ()=>sleRounds
]);
function question(entry) {
    const correctIndexes = entry.answers.map((answer, index)=>answer.correct ? index : -1).filter((index)=>index !== -1);
    if (correctIndexes.length !== 1) {
        throw new Error(`Question "${entry.text}" must have exactly one correct answer.`);
    }
    return {
        ...entry,
        answers: entry.answers.map((answer)=>answer.text),
        correct: correctIndexes[0]
    };
}
const sleRounds = [
    {
        title: "Caring Christian",
        definition: "To me, being a Caring Christian is more than just showing up at Mass every Friday at 8:00am. It's about actually noticing and doing something when someone is having a hard day, even if it's just a small act of kindness. Not just when someone is having a bad day, a Caring Christian follows Jesus' example by putting others before themselves in moments of their everyday life.",
        claim: "I personally feel that Caring Christian is my strongest SLE because I always look for ways to help my classmates and make sure everyone feels included in our school community.",
        evidence: "At Qofa, I think I have exemplified the Caring Christian SLE when I help my younger buddy or do a simple act, as simple as holding the door for someone or helping them with their stuff. I have also taken that mindset outside of school too. Since 7th grade, over the spring season, I've been running a fundraiser called Loquat4Humanity. I was born prematurely and spent three months in the NICU (Neonatal Intensive Care Unit), so when I found a loquat tree just sitting unused in my backyard, I saw a chance to give back. I started selling the fruit and donating the earnings to the same NICU that once cared for me and this past season, I raised over $500. That experience taught me that being a Caring Christian isn't just about small daily acts, it's also about looking at what you have and asking how it can help someone else. You can’t be perfect, but you can choose the right action everyday.",
        questions: [
            question({
                text: "What is something you can do to be a Caring Christian?",
                answers: [
                    {
                        text: "Study hard and never give up on assignments",
                        correct: false
                    },
                    {
                        text: "Stay active and eat healthy every day",
                        correct: false
                    },
                    {
                        text: "Notice when someone is struggling and do something about it",
                        correct: true
                    },
                    {
                        text: "Manage your time and meet your deadlines",
                        correct: false
                    }
                ],
                story: "Being a Caring Christian is helping someone who is struggling and acting with kindness."
            }),
            question({
                text: "What fruit did I use to raise over $500 for the NICU?",
                answers: [
                    {
                        text: "Mango",
                        correct: false
                    },
                    {
                        text: "Loquat",
                        correct: true
                    },
                    {
                        text: "Persimmon",
                        correct: false
                    },
                    {
                        text: "Fig",
                        correct: false
                    }
                ],
                story: "As I stated earlier, I spent my first three months in the NICU, and when I found out in my backyard that there was this precious fruit that was very underrated (loquats), I decided to raise money and give back for something that was very important to me."
            })
        ]
    },
    {
        title: "Active Learner",
        definition: "Being an Active Learner means I don't just sit in class waiting for the bell to ring. I am not afraid to ask questions, even if they sound “dumb”. I try to contribute my part in group projects, and I try to not give up until I have figured it out, living by the “never give up” motto.",
        claim: "I have achieved this SLE by always giving my best effort on my assignments and showing enthusiasm in all subjects, even when the material gets challenging, the day gets pretty long, or I had a rough night.",
        evidence: "At Qofa, I have shown the Active Learner SLE, but it’s more than just finishing my homework. It means walking into class even on a hard day and choosing to actually be there not just physically, but mentally. There were plenty of mornings from my two years where I was tired and it would've been easy to just zone out, but I tried to stay engaged, and I have to admit, I am not perfect, but you can’t catch me sleeping in class, never.",
        questions: [
            question({
                text: "What is something an Active Learner does when they don't understand something in class?",
                answers: [
                    {
                        text: "Wait and hope it makes sense later",
                        correct: false
                    },
                    {
                        text: "Ask a question even if it sounds dumb",
                        correct: true
                    },
                    {
                        text: "Copy what the person next to them wrote",
                        correct: false
                    },
                    {
                        text: "Stare out the window and think about lunch",
                        correct: false
                    }
                ],
                story: "Personally, during 6th grade, I was scared to ask a question if I thought it sounded dumb, and all my questions sounded dumb back then. But now, building that confidence, I try to ask questions even if I think it sounds dumb."
            }),
            question({
                text: "No matter how tired I am, what is something you will never catch me doing in class?",
                answers: [
                    {
                        text: "Asking too many questions",
                        correct: false
                    },
                    {
                        text: "Sleeping",
                        correct: true
                    },
                    {
                        text: "Taking notes",
                        correct: false
                    },
                    {
                        text: "Paying attention",
                        correct: false
                    }
                ],
                story: "No matter what, you will never catch me sleeping in class. I have to admit, I am not perfect, but I just can't sleep in class.",
                pointsMultiplier: 2
            })
        ]
    },
    {
        title: "Self-Confident & Responsible",
        definition: "Being a Self-Confident and Responsible individual means believing in yourself even when the situation feels uncomfortable or scary. It's about walking into a room and trusting that you belong there, whether that's raising your hand with an answer you're not 100% sure about, speaking in front of the whole class like we all have to do for our SLE presentation, or stepping into a leadership position you've never had before. Confidence is something you build every time you choose the hard way, not by taking the shortcut or the \"easy way out\".",
        claim: "I have shown real growth in this area by managing my time better this year and becoming more comfortable in leading positions and speaking in front of crowds.",
        evidence: "One of the biggest things that helped my confidence grow at Qofa was being the Head 8th Grade Coordinator for the yearbook. I had to work with Austin, Julia, Annie, and Hannah to make sure everything came together for the 8th grade graduation part of the yearbook. It was truly amazing to lead, plan all the events like the Quotes, Signatures, and more, and speak in front of everyone to make sure our yearbook would be full of memories for all of us.",
        questions: [
            question({
                text: "What position did I have on Yearbook this year?",
                answers: [
                    {
                        text: "8th Grade Coordinator",
                        correct: false
                    },
                    {
                        text: "Head 8th Grade Coordinator",
                        correct: true
                    },
                    {
                        text: "Yearbook Editor",
                        correct: false
                    },
                    {
                        text: "Photo Manager",
                        correct: false
                    }
                ],
                story: "Being the Head 8th Grade Coordinator was an honor and working with Austin, Julia, Annie, and Hannah was the best part.",
                pointsMultiplier: 2
            }),
            question({
                text: "What does it mean to be Self-Confident and Responsible?",
                answers: [
                    {
                        text: "Always having the right answer",
                        correct: false
                    },
                    {
                        text: "Avoiding situations that make you nervous",
                        correct: false
                    },
                    {
                        text: "Believing in yourself and stepping up even when it's uncomfortable",
                        correct: true
                    },
                    {
                        text: "Only taking on roles you already know how to do",
                        correct: false
                    }
                ],
                story: "I always try to get out of my comfort zone and try things that make me nervous, and I think that embodies a Self-Confident and Responsible individual."
            })
        ]
    },
    {
        title: "Healthy Individual",
        definition: "Being a Healthy Individual isn’t just about playing sports for me,  it’s about taking care of my body, my mind, and my relationships with others. It means making choices that keep the space around me positive.",
        claim: "I have achieved this SLE by staying active in sports and learning how to handle stress in a positive, healthy way throughout middle school.",
        evidence: "From 4th-6th grade, I played soccer for the Santa Clara Lions as a center-midfielder where I learned lots of amazing qualities that I apply into everyday use. At Qofa, I advanced into two more sports, playing basketball and flag football through all the years, unfortunately cutting my season short in 8th grade due to a broken wrist during the first practice of the season. Moreover, as a vegetarian, I try to control the amount of processed foods I eat, whether it’s chips or candy, and eat more vegetables, whole grains, and foods that contain protein.",
        questions: [
            question({
                text: "What is something a Healthy Individual does to take care of themselves beyond just playing sports?",
                answers: [
                    {
                        text: "Eat as much junk food as possible before practice",
                        correct: false
                    },
                    {
                        text: "Stay up late every night watching videos",
                        correct: false
                    },
                    {
                        text: "Make mindful food choices and keep the space around them positive",
                        correct: true
                    },
                    {
                        text: "Only focus on physical health and ignore everything else",
                        correct: false
                    }
                ],
                story: "When someone thinks of Healthy Individual, they think of someone who plays lots of sports. But something as simple as eating healthy and making the space around you positive is just as important."
            }),
            question({
                text: "What two sports did I play at Qofa?",
                answers: [
                    {
                        text: "Basketball and Soccer",
                        correct: false
                    },
                    {
                        text: "Soccer and Flag Football",
                        correct: false
                    },
                    {
                        text: "Basketball and Flag Football",
                        correct: true
                    },
                    {
                        text: "Volleyball and Basketball",
                        correct: false
                    }
                ],
                story: "Basketball and flag football were the two sports I played at Qofa."
            })
        ]
    }
];
const questions = sleRounds.flatMap((round, roundIndex)=>round.questions.map((question, questionIndex)=>({
            ...question,
            round: round.title,
            roundIndex,
            questionIndex
        })));
}),
"[project]/utils/game-logic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/CircularTimer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircularTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/game-logic.ts [app-ssr] (ecmascript)");
;
;
function CircularTimer({ timeLeft, revealed = false, result, size = "md" }) {
    const radius = 44;
    const circumference = 2 * Math.PI * radius;
    const progress = revealed ? 1 : Math.max(0, Math.min(1, timeLeft / __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"]));
    const dashOffset = circumference * (1 - progress);
    const symbol = result === "timeout" ? "⏱" : result === "incorrect" ? "×" : "✓";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `circular-timer ${size} ${timeLeft <= 5 && !revealed ? "urgent" : ""} ${revealed ? "done" : ""} ${result ?? ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 104 104",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "timer-track",
                        cx: "52",
                        cy: "52",
                        r: radius
                    }, void 0, false, {
                        fileName: "[project]/components/CircularTimer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/AnimatedScore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedScore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AnimatedScore({ from, to }) {
    const [displayScore, setDisplayScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(from);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const start = performance.now();
        const duration = 900;
        const difference = to - from;
        if (difference === 0) {
            setDisplayScore(to);
            return;
        }
        let animationId = 0;
        const tick = (now)=>{
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayScore(Math.round(from + difference * eased));
            if (progress < 1) animationId = requestAnimationFrame(tick);
        };
        animationId = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(animationId);
    }, [
        from,
        to
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: displayScore.toLocaleString()
    }, void 0, false);
}
}),
"[project]/utils/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://lqfqqpkrlwgftsbncwxm.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_SLApj4E5PrzSWTXZly9Gzg_AGy_ljWF"));
}
}),
"[project]/app/host/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quiz-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CircularTimer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CircularTimer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedScore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimatedScore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/game-logic.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
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
const confettiColors = [
    "#6366f1",
    "#14b8a6",
    "#f97316",
    "#ef4444",
    "#facc15",
    "#3b82f6"
];
const botNames = [
    "Mia",
    "Leo",
    "Sofia",
    "Noah",
    "Emma",
    "Eli",
    "Ava",
    "Mateo",
    "Luna",
    "Owen",
    "Zoe",
    "Mason",
    "Nina",
    "Lucas",
    "Ella",
    "Kai",
    "Ruby",
    "Miles",
    "Ivy",
    "Theo",
    "Grace",
    "Liam",
    "Maya",
    "Jack",
    "Chloe",
    "Henry",
    "Aria",
    "Logan",
    "Nora",
    "Ezra",
    "Layla",
    "Finn",
    "Stella",
    "Caleb",
    "Jade"
];
const finalPhotos = [
    {
        src: "/assets/firstdayof8thwsister.png",
        title: "First Day of 8th Grade",
        description: "Sister drove me to school - first day of 8th grade."
    },
    {
        src: "/assets/6thgrademe.png",
        title: "6th Grade",
        description: "A look back at the start of middle school."
    },
    {
        src: "/assets/6thgradepicturewdad.png",
        title: "6th Grade With Dad",
        description: "My dad was with me."
    },
    {
        src: "/assets/sle6th.png",
        title: "6th Grade SLE",
        description: "Active Learner SLE."
    },
    {
        src: "/assets/sle8th.png",
        title: "8th Grade SLE",
        description: "Self Confident & Responsible SLE."
    },
    {
        src: "/assets/basketballteam.jpg",
        title: "Basketball Team",
        description: "Healthy individual."
    },
    {
        src: "/assets/basketball.png",
        title: "Flag Football Team",
        description: "Flag football team."
    },
    {
        src: "/assets/yearbook.jpg",
        title: "8th Grade Yearbook Team",
        description: "Austin, Hannah, Julia, Annie, and me."
    },
    {
        src: "/assets/loquat1.png",
        title: "Loquat Tree",
        description: "Continued, my act of giving back."
    }
];
function splitPlayerName(playerName = "") {
    const emojiMatch = playerName.match(/^(\p{Emoji_Presentation})/u);
    const emoji = emojiMatch ? emojiMatch[1] : "👤";
    const name = emojiMatch ? playerName.slice(emojiMatch[1].length).trim() : playerName;
    return {
        emoji,
        name: name || playerName
    };
}
function HostPage() {
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [confetti, setConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [joinUrl, setJoinUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"]);
    const [hostAuth, setHostAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [kickModal, setKickModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countdownLeft, setCountdownLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTDOWN_SECONDS"]);
    const [scoreBaselines, setScoreBaselines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [testBotsEnabled, setTestBotsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [podiumStep, setPodiumStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const botAnswerKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(), []);
    const question = game ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"][game.current_question] : null;
    const questionMaxPoints = question ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxPointsFor"])(question.pointsMultiplier ?? 1) : 1000;
    const sle = game ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleRounds"][game.pending_sle_index ?? 0] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleRounds"][0];
    const rankedPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...players
        ].sort((a, b)=>b.score - a.score), [
        players
    ]);
    const answerCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const counts = [
            0,
            0,
            0,
            0
        ];
        if (!game) return counts;
        answers.filter((answer)=>answer.question_index === game.current_question).forEach((answer)=>{
            if (answer.choice >= 0 && answer.choice <= 3) counts[answer.choice] += 1;
        });
        return counts;
    }, [
        answers,
        game?.current_question
    ]);
    const answerNamesByChoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const names = [
            [],
            [],
            [],
            []
        ];
        if (!game) return names;
        const playerNames = new Map(players.map((player)=>[
                player.id,
                player.name
            ]));
        answers.filter((answer)=>answer.question_index === game.current_question).forEach((answer)=>{
            if (answer.choice < 0 || answer.choice > 3) return;
            const playerName = playerNames.get(answer.player_id);
            if (!playerName) return;
            names[answer.choice].push(playerName.replace(/^\p{Emoji_Presentation}\s*/u, "").trim() || playerName);
        });
        return names.map((choiceNames)=>choiceNames.sort((a, b)=>a.localeCompare(b)));
    }, [
        answers,
        players,
        game?.current_question
    ]);
    const playerStreaks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const streaks = {};
        if (!game) return streaks;
        players.forEach((player)=>{
            let streak = 0;
            for(let questionIndex = game.current_question; questionIndex >= 0; questionIndex -= 1){
                const answer = answers.find((entry)=>entry.player_id === player.id && entry.question_index === questionIndex);
                if (!answer || !answer.correct) break;
                streak += 1;
            }
            streaks[player.id] = streak;
        });
        return streaks;
    }, [
        answers,
        players,
        game?.current_question
    ]);
    const currentAnswerTotal = answerCounts.reduce((total, count)=>total + count, 0);
    const maxAnswerCount = Math.max(...answerCounts, 1);
    const botCount = players.filter((player)=>player.id.startsWith("bot_")).length;
    const qrJoinUrl = game && joinUrl ? `${joinUrl}/?code=${encodeURIComponent(game.code)}` : joinUrl;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setJoinUrl(window.location.origin);
        initializeGame();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (game?.phase !== "results") {
            setPodiumStep(0);
            return;
        }
        setPodiumStep(0);
        const timeouts = [
            window.setTimeout(()=>setPodiumStep(1), 600),
            window.setTimeout(()=>setPodiumStep(2), 1900),
            window.setTimeout(()=>{
                setPodiumStep(3);
                launchConfetti();
            }, 3200)
        ];
        return ()=>timeouts.forEach((timeout)=>window.clearTimeout(timeout));
    }, [
        game?.phase
    ]);
    async function initializeGame() {
        const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassCode"])();
        const { data, error } = await supabase.from('games').insert({
            code,
            phase: 'lobby',
            current_question: 0,
            revealed: false,
            pending_sle_index: null,
            question_started_at: Date.now(),
            question_count: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length
        }).select().single();
        if (data) {
            setGame(data);
            setPlayers([]);
            setAnswers([]);
        }
    }
    // Real-time subscriptions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!game) return;
        const channel = supabase.channel(`host-${game.id}`).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'players',
            filter: `game_id=eq.${game.id}`
        }, (payload)=>{
            const newPlayer = {
                id: payload.new.id,
                name: payload.new.name,
                score: payload.new.score,
                joinedAt: payload.new.joined_at
            };
            setPlayers((prev)=>{
                // Check for duplicate names - strip emoji prefix for comparison
                const newBaseName = newPlayer.name.replace(/^\p{Emoji_Presentation}\s*/u, '').trim().toLowerCase();
                const duplicate = prev.find((p)=>{
                    const existingBase = p.name.replace(/^\p{Emoji_Presentation}\s*/u, '').trim().toLowerCase();
                    return existingBase === newBaseName;
                });
                if (duplicate) {
                    // Auto-remove the newest (incoming) duplicate
                    supabase.from('players').delete().eq('id', newPlayer.id).then();
                    return prev;
                }
                return [
                    ...prev,
                    newPlayer
                ];
            });
        }).on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'players',
            filter: `game_id=eq.${game.id}`
        }, (payload)=>{
            setPlayers((prev)=>prev.map((p)=>p.id === payload.new.id ? {
                        ...p,
                        name: payload.new.name,
                        score: payload.new.score
                    } : p));
        }).on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'answers',
            filter: `game_id=eq.${game.id}`
        }, (payload)=>{
            setAnswers((prev)=>[
                    ...prev,
                    payload.new
                ]);
        }).subscribe();
        return ()=>{
            supabase.removeChannel(channel);
        };
    }, [
        game?.id
    ]);
    // Timer loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!game) return;
        setTimeLeft((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeLeftFor"])(game.phase, game.question_started_at));
        if (game.phase !== 'question' || game.revealed) return;
        const id = setInterval(()=>{
            const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeLeftFor"])(game.phase, game.question_started_at);
            setTimeLeft(left);
            if (left <= 0) {
                hostAction('reveal');
            }
        }, 500);
        return ()=>clearInterval(id);
    }, [
        game?.phase,
        game?.revealed,
        game?.question_started_at
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!game || game.phase !== 'question' || game.revealed) return;
        if (players.length === 0 || currentAnswerTotal < players.length) return;
        const id = window.setTimeout(()=>hostAction('reveal'), 450);
        return ()=>window.clearTimeout(id);
    }, [
        currentAnswerTotal,
        players.length,
        game?.phase,
        game?.revealed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!game || !question || game.phase !== "question" || game.revealed) return;
        const answeredIds = new Set(answers.filter((answer)=>answer.question_index === game.current_question).map((answer)=>answer.player_id));
        const botsToAnswer = players.filter((player)=>{
            const answerKey = `${game.id}:${game.current_question}:${player.id}`;
            return player.id.startsWith("bot_") && !answeredIds.has(player.id) && !botAnswerKeys.current.has(answerKey);
        });
        if (botsToAnswer.length === 0) return;
        const timeouts = botsToAnswer.map((bot, index)=>{
            const answerKey = `${game.id}:${game.current_question}:${bot.id}`;
            botAnswerKeys.current.add(answerKey);
            const idParts = bot.id.split("_");
            const botIndex = Number(idParts[idParts.length - 1]) || index;
            const choice = (botIndex + game.current_question) % letters.length;
            const delay = 650 + index * 360 + botIndex * 137 % 540;
            return window.setTimeout(async ()=>{
                const { data: latestGame } = await supabase.from("games").select("phase,revealed,current_question,question_started_at").eq("id", game.id).single();
                if (!latestGame || latestGame.phase !== "question" || latestGame.revealed || latestGame.current_question !== game.current_question) {
                    return;
                }
                const isCorrect = choice === question.correct;
                const botTimeLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeLeftFor"])(latestGame.phase, latestGame.question_started_at);
                const earnedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateQuestionPoints"])(isCorrect, question.pointsMultiplier ?? 1, botTimeLeft);
                const { error } = await supabase.from("answers").insert({
                    game_id: game.id,
                    player_id: bot.id,
                    question_index: game.current_question,
                    choice,
                    correct: isCorrect
                });
                if (!error && earnedPoints > 0) {
                    const currentScore = players.find((player)=>player.id === bot.id)?.score ?? bot.score;
                    await supabase.from("players").update({
                        score: currentScore + earnedPoints
                    }).eq("id", bot.id);
                }
            }, delay);
        });
        return ()=>timeouts.forEach((timeout)=>window.clearTimeout(timeout));
    }, [
        game?.id,
        game?.phase,
        game?.revealed,
        game?.current_question,
        players.length,
        question
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!game || game.phase !== 'countdown') return;
        const tick = ()=>{
            const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$game$2d$logic$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countdownLeftFor"])(game.phase, game.question_started_at);
            setCountdownLeft(left);
            if (left <= 0) {
                supabase.from('games').update({
                    phase: 'question',
                    question_started_at: Date.now()
                }).eq('id', game.id).select().single().then((result)=>{
                    const { data } = result;
                    if (data) setGame(data);
                });
            }
        };
        tick();
        const id = setInterval(tick, 250);
        return ()=>clearInterval(id);
    }, [
        game?.phase,
        game?.question_started_at,
        game?.id
    ]);
    function baselinesFrom(currentPlayers) {
        return Object.fromEntries(currentPlayers.map((player)=>[
                player.id,
                player.score
            ]));
    }
    async function hostAction(action) {
        if (!game) return;
        if (action === "reset") {
            botAnswerKeys.current.clear();
            await initializeGame();
            return;
        }
        const updates = {};
        if (action === "start") {
            botAnswerKeys.current.clear();
            updates.phase = 'welcome';
            updates.current_question = 0;
            updates.revealed = false;
            updates.pending_sle_index = null;
            updates.question_started_at = Date.now();
            // Reset scores in DB
            players.forEach((p)=>supabase.from('players').update({
                    score: 0
                }).eq('id', p.id).then());
            setPlayers((prev)=>prev.map((player)=>({
                        ...player,
                        score: 0
                    })));
            setScoreBaselines(Object.fromEntries(players.map((player)=>[
                    player.id,
                    0
                ])));
            setAnswers([]);
        }
        if (action === "reveal") {
            updates.revealed = true;
        }
        if (action === "next" && game.phase === 'welcome') {
            updates.phase = 'sle';
            updates.current_question = 0;
            updates.revealed = false;
            updates.pending_sle_index = 0;
            updates.question_started_at = Date.now();
            setScoreBaselines(baselinesFrom(players));
        } else if (action === "next" && game.phase === 'thanks') {
            updates.phase = 'photos';
        } else if (action === "next" && game.phase === 'photos') {
            updates.phase = 'results';
        } else if (action === "next" && game.phase === 'results') {
            updates.phase = 'lobby';
            updates.current_question = 0;
            updates.revealed = false;
            updates.pending_sle_index = null;
            setAnswers([]);
        } else if (action === "next") {
            const q = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"][game.current_question];
            const atRoundEnd = q.questionIndex === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleRounds"][q.roundIndex].questions.length - 1;
            const atFinalQuestion = game.current_question >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length - 1;
            if (game.phase === 'sle') {
                updates.phase = 'countdown';
                updates.revealed = false;
                updates.pending_sle_index = null;
                updates.question_started_at = Date.now();
                setScoreBaselines(baselinesFrom(players));
            } else if (game.phase === 'leaderboard') {
                if (atFinalQuestion) {
                    updates.phase = 'thanks';
                } else if (atRoundEnd) {
                    updates.phase = 'sle';
                    updates.current_question = game.current_question + 1;
                    updates.revealed = false;
                    updates.pending_sle_index = q.roundIndex + 1;
                } else {
                    updates.phase = 'countdown';
                    updates.current_question = game.current_question + 1;
                    updates.revealed = false;
                    updates.pending_sle_index = null;
                    updates.question_started_at = Date.now();
                    setScoreBaselines(baselinesFrom(players));
                }
            } else {
                updates.phase = 'leaderboard';
            }
        }
        const { data } = await supabase.from('games').update(updates).eq('id', game.id).select().single();
        if (data) {
            setGame(data);
        }
    }
    function kickPlayer(id, name) {
        setKickModal({
            id,
            name
        });
    }
    async function confirmKick() {
        if (!kickModal) return;
        await supabase.from('players').delete().eq('id', kickModal.id);
        setPlayers((prev)=>prev.filter((p)=>p.id !== kickModal.id));
        setKickModal(null);
    }
    async function addStressBots() {
        if (!game || botCount > 0) return;
        const stamp = Date.now();
        const bots = botNames.map((name, index)=>({
                id: `bot_${stamp}_${String(index + 1).padStart(2, "0")}`,
                game_id: game.id,
                name: `${name} Bot ${String(index + 1).padStart(2, "0")}`,
                score: 0,
                joined_at: stamp + index
            }));
        await supabase.from("players").insert(bots);
    }
    async function toggleTestBots() {
        if (!game) return;
        if (testBotsEnabled) {
            setTestBotsEnabled(false);
            botAnswerKeys.current.clear();
            await supabase.from("players").delete().eq("game_id", game.id).like("id", "bot_%");
            setPlayers((prev)=>prev.filter((player)=>!player.id.startsWith("bot_")));
            return;
        }
        setTestBotsEnabled(true);
    }
    function launchConfetti() {
        setConfetti(Array.from({
            length: 100
        }, (_, i)=>i));
        window.setTimeout(()=>setConfetti([]), 6000);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function shortcuts(event) {
            if (!game) return;
            if (event.code === "Space" && game.phase === "question") {
                event.preventDefault();
                if (game.revealed) hostAction("next");
            }
        }
        window.addEventListener("keydown", shortcuts);
        return ()=>window.removeEventListener("keydown", shortcuts);
    }, [
        game
    ]);
    if (!hostAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "app",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    maxWidth: '400px',
                    width: '100%',
                    margin: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "join-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stack stack-sm text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Host Access"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "subtitle",
                                    children: "Enter the host password to continue."
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "join-form",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "input-group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        className: "input-field",
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        onKeyDown: (e)=>e.key === "Enter" && password === "cwb" && setHostAuth(true),
                                        placeholder: "Password",
                                        autoFocus: true,
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary btn-full btn-lg",
                                    onClick: ()=>password === "cwb" && setHostAuth(true),
                                    children: "Enter"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                password !== "" && password !== "cwb" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "message error",
                                    children: "Incorrect password"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 57
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 513,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/host/page.tsx",
                    lineNumber: 508,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 507,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/host/page.tsx",
            lineNumber: 506,
            columnNumber: 7
        }, this);
    }
    if (!game) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "app host-app",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "spinner"
            }, void 0, false, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 543,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/host/page.tsx",
            lineNumber: 542,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app host-app",
        children: [
            game.phase === "lobby" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card host-lobby",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge",
                                children: "Game Control Panel"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-ghost",
                                onClick: ()=>hostAction("reset"),
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lobby-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "How Well Do You Know Aadit?"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 562,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle",
                                children: "Use the code on screen to join the game. Thank you for playing!"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 561,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "code-display",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '48px',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-muted text-sm",
                                        style: {
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em"
                                        },
                                        children: "Class Code"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "code-value",
                                        children: game.code
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this),
                            joinUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-muted text-sm",
                                        style: {
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em"
                                        },
                                        children: "Or Scan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "qr-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                            value: qrJoinUrl,
                                            size: 190,
                                            bgColor: "#ffffff",
                                            fgColor: "#0f0f11",
                                            level: "M"
                                        }, void 0, false, {
                                            fileName: "[project]/app/host/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 577,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge green",
                                    children: [
                                        players.length,
                                        " player",
                                        players.length !== 1 ? "s" : "",
                                        " joined"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 593,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this),
                    players.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "player-cards-grid",
                        children: players.map((p)=>{
                            const { emoji, name: baseName } = splitPlayerName(p.name);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "player-card",
                                onClick: ()=>kickPlayer(p.id, p.name),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "player-card-emoji",
                                        children: emoji
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "player-card-name",
                                        children: baseName
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 21
                                    }, this),
                                    (playerStreaks[p.id] ?? 0) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "player-card-streak",
                                        children: [
                                            "🔥 ",
                                            playerStreaks[p.id]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 608,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "player-card-trash",
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 604,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 600,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "button-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary btn-lg",
                                onClick: ()=>hostAction("start"),
                                disabled: players.length === 0,
                                children: "Start Round"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 618,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "host-test-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `btn btn-ghost btn-lg test-mode-toggle ${testBotsEnabled ? "active" : ""}`,
                                        onClick: toggleTestBots,
                                        "aria-expanded": testBotsEnabled,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 30,
                                            strokeWidth: 2.6,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/host/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 626,
                                        columnNumber: 15
                                    }, this),
                                    testBotsEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-ghost btn-lg stress-bot-btn",
                                        onClick: addStressBots,
                                        disabled: botCount > 0,
                                        children: botCount > 0 ? `${botCount} Bots Ready` : "Add 35 Test Bots"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 634,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 617,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 553,
                columnNumber: 9
            }, this),
            game.phase === "welcome" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen welcome-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "welcome-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge accent center-x",
                            children: "Qofa 8th Grade SLE Project"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Welcome"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "How Well Do You Know Aadit?"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 653,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-xl",
                            onClick: ()=>hostAction("next"),
                            children: "Begin →"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/host/page.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            game.phase === "countdown" && question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen countdown-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-kicker",
                        children: question.pointsMultiplier === 2 ? "Next Question" : "Next Question"
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this),
                    question.pointsMultiplier === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "double-points-badge angled",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Double Points"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 669,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "×2"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 670,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 668,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-number",
                        children: countdownLeft
                    }, countdownLeft, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 673,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "countdown-round",
                        children: question.round
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 676,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 663,
                columnNumber: 9
            }, this),
            game.phase === "question" && question && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `host-full-screen ${game.revealed ? "revealed" : "answering"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-top-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-label",
                                        children: "Answers"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 685,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-value",
                                        children: [
                                            currentAnswerTotal,
                                            " / ",
                                            players.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 686,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CircularTimer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                timeLeft: timeLeft,
                                revealed: game.revealed,
                                size: "lg"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 688,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-label",
                                        children: "Round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-value",
                                        children: question.round
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 689,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 683,
                        columnNumber: 11
                    }, this),
                    question.pointsMultiplier === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "double-points-under-timer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "double-points-badge question",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Double Points"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 698,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "×2"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 697,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 696,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-question-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "host-big-question-text",
                            children: question.text
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 705,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 704,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-answers-grid-full",
                        children: question.answers.map((ans, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `host-answer-huge ${letters[index].toLowerCase()} ${game.revealed && index === question.correct ? "correct" : ""} ${game.revealed && index !== question.correct ? "dim" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "letter-badge-huge",
                                        children: letters[index]
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 714,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "answer-text-huge",
                                        children: ans
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 715,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, ans, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 708,
                        columnNumber: 11
                    }, this),
                    game.revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-reveal-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "host-answer-chart final",
                                "aria-label": "Final answer counts",
                                children: answerCounts.map((count, index)=>{
                                    const selectedNames = answerNamesByChoice[index];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `answer-chart-column ${letters[index].toLowerCase()}`,
                                        tabIndex: 0,
                                        "aria-label": `${letters[index]} selected by ${selectedNames.length === 0 ? "no one" : selectedNames.join(", ")}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "answer-chart-top",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/app/host/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 733,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "answer-chart-track",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "answer-chart-fill",
                                                    style: {
                                                        height: count === 0 ? "0%" : `${Math.max(8, count / maxAnswerCount * 100)}%`,
                                                        minHeight: count === 0 ? 0 : 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/host/page.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 736,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "answer-chart-letter",
                                                children: letters[index]
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 745,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "answer-chart-tooltip",
                                                role: "tooltip",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            letters[index],
                                                            " responses"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/host/page.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 23
                                                    }, this),
                                                    selectedNames.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: selectedNames.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: name
                                                            }, name, false, {
                                                                fileName: "[project]/app/host/page.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/host/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No responses yet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/host/page.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 746,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, letters[index], true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 727,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 722,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "host-story-toast host-story-panel",
                                children: question.story
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 762,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 721,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-bottom-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "points-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "points-val",
                                        children: [
                                            "+",
                                            questionMaxPoints
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "points-label",
                                        children: "Points"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 769,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "host-actions",
                                children: game.revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary btn-xl",
                                    onClick: ()=>hostAction("next"),
                                    children: "Next →"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 773,
                                    columnNumber: 17
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 771,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 766,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 682,
                columnNumber: 9
            }, this),
            game.phase === "sle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen sle-reveal-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sle-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge accent",
                                children: "Schoolwide Learning Expectation"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "sle-main-title",
                                children: sle.title
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 787,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 785,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sle-grid-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sle-card-huge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sle-card-label",
                                        children: "Definition"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 792,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sle-card-content",
                                        children: sle.definition
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 791,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sle-card-huge highlight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sle-card-label",
                                        children: "Achievement Claim"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sle-card-content",
                                        children: sle.claim
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 797,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 795,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sle-card-huge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sle-card-label",
                                        children: "My Evidence"
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 800,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sle-card-content",
                                        children: sle.evidence
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 801,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 799,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 790,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-bottom-bar centered",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-xl",
                            onClick: ()=>hostAction("next"),
                            children: "Continue Quiz →"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 806,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 805,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 784,
                columnNumber: 9
            }, this),
            game.phase === "leaderboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen leaderboard-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "leaderboard-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge green",
                                children: game.current_question >= game.question_count - 1 ? "Final Results" : "After This Question"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 817,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "leaderboard-main-title",
                                children: "Top 5 Scores"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 818,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 816,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "leaderboard-list-huge",
                        children: rankedPlayers.slice(0, 5).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `leaderboard-row-huge rank-${i + 1}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rank-badge-huge",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "player-info-huge",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "player-name-huge",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 826,
                                                columnNumber: 19
                                            }, this),
                                            (playerStreaks[p.id] ?? 0) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leaderboard-streak",
                                                children: [
                                                    "🔥 ",
                                                    playerStreaks[p.id],
                                                    " streak"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 825,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "score-badge-wrap",
                                        children: [
                                            p.score > (scoreBaselines[p.id] ?? p.score) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "score-delta",
                                                children: [
                                                    "+",
                                                    (p.score - (scoreBaselines[p.id] ?? p.score)).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 833,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "score-badge-huge",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedScore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    from: scoreBaselines[p.id] ?? p.score,
                                                    to: p.score
                                                }, void 0, false, {
                                                    fileName: "[project]/app/host/page.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 835,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 831,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 821,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-bottom-bar centered",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-xl",
                            onClick: ()=>hostAction("next"),
                            children: game.current_question >= game.question_count - 1 ? "Finish →" : "Continue →"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 844,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 843,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 815,
                columnNumber: 9
            }, this),
            game.phase === "thanks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen thanks-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "welcome-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "badge green center-x",
                            children: "Presentation Complete"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 855,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Thank You"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 856,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Thank you for playing and for being part of my Qofa journey."
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 857,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-xl",
                            onClick: ()=>hostAction("next"),
                            children: "See Results"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 858,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/host/page.tsx",
                    lineNumber: 854,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 853,
                columnNumber: 9
            }, this),
            game.phase === "photos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen photo-gallery-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "photo-gallery-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge accent center-x",
                                children: "Qofa Memories"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 869,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "photo-gallery-title",
                                children: "Before the Results"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 870,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 868,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "photo-gallery-grid",
                        children: finalPhotos.map((photo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "memory-photo-card",
                                title: `${photo.title}: ${photo.description}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: photo.src,
                                        alt: photo.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 876,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: photo.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 878,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: photo.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 879,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/host/page.tsx",
                                        lineNumber: 877,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, photo.src, true, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 875,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 873,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-bottom-bar centered photo-gallery-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-xl",
                            onClick: ()=>hostAction("next"),
                            children: "Continue to Results →"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 886,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 885,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 867,
                columnNumber: 9
            }, this),
            game.phase === "results" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "host-full-screen results-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "results-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge green center-x",
                                children: "Final Results"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 897,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "results-main-title",
                                children: "Podium"
                            }, void 0, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 898,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 896,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "podium-stage",
                        "aria-live": "polite",
                        children: [
                            rankedPlayers[1],
                            rankedPlayers[0],
                            rankedPlayers[2]
                        ].map((playerEntry, slotIndex)=>{
                            const place = slotIndex === 0 ? 2 : slotIndex === 1 ? 1 : 3;
                            const requiredStep = place === 3 ? 1 : place === 2 ? 2 : 3;
                            const parsed = splitPlayerName(playerEntry?.name ?? "");
                            const isVisible = Boolean(playerEntry) && podiumStep >= requiredStep;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `podium-slot place-${place} ${isVisible ? "show" : ""}`,
                                children: isVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "podium-person",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "podium-emoji",
                                                    children: parsed.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/app/host/page.tsx",
                                                    lineNumber: 913,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "podium-name",
                                                    children: parsed.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/host/page.tsx",
                                                    lineNumber: 914,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "podium-score",
                                                    children: [
                                                        playerEntry.score.toLocaleString(),
                                                        " pts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/host/page.tsx",
                                                    lineNumber: 915,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/host/page.tsx",
                                            lineNumber: 912,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "podium-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    place,
                                                    place === 1 ? "st" : place === 2 ? "nd" : "rd"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/host/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/host/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "podium-placeholder"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 922,
                                    columnNumber: 21
                                }, this)
                            }, place, false, {
                                fileName: "[project]/app/host/page.tsx",
                                lineNumber: 909,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 901,
                        columnNumber: 11
                    }, this),
                    podiumStep >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "host-bottom-bar centered results-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-primary btn-xl",
                            onClick: ()=>hostAction("next"),
                            children: "Back to Lobby"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 931,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 930,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 895,
                columnNumber: 9
            }, this),
            kickModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setKickModal(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-card",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-icon",
                            children: "🗑️"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 943,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Remove Player"
                        }, void 0, false, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 944,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted",
                            children: [
                                "Are you sure you want to remove ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: kickModal.name
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 945,
                                    columnNumber: 71
                                }, this),
                                " from the game?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 945,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-ghost",
                                    onClick: ()=>setKickModal(null),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 947,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-danger",
                                    onClick: confirmKick,
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/app/host/page.tsx",
                                    lineNumber: 948,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/host/page.tsx",
                            lineNumber: 946,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/host/page.tsx",
                    lineNumber: 942,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 941,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "confetti",
                "aria-hidden": "true",
                children: confetti.map((piece)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        style: {
                            left: `${Math.random() * 100}%`,
                            background: confettiColors[piece % confettiColors.length],
                            animationDuration: `${2.4 + Math.random() * 2.8}s`,
                            animationDelay: `${Math.random() * 0.8}s`
                        }
                    }, piece, false, {
                        fileName: "[project]/app/host/page.tsx",
                        lineNumber: 957,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/host/page.tsx",
                lineNumber: 955,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/host/page.tsx",
        lineNumber: 549,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0o5jh0l._.js.map