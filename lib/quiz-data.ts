export type Question = {
  text: string;
  answers: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  story: string;
  pointsMultiplier?: 1 | 2;
};

type EditableAnswer = {
  text: string;
  correct: boolean;
};

type EditableQuestion = Omit<Question, "answers" | "correct"> & {
  answers: [EditableAnswer, EditableAnswer, EditableAnswer, EditableAnswer];
};

export type SleRound = {
  title: string;
  definition: string;
  claim: string;
  evidence: string;
  questions: Question[];
};

function question(entry: EditableQuestion): Question {
  const correctIndexes = entry.answers
    .map((answer, index) => (answer.correct ? index : -1))
    .filter(index => index !== -1);

  if (correctIndexes.length !== 1) {
    throw new Error(`Question "${entry.text}" must have exactly one correct answer.`);
  }

  return {
    ...entry,
    answers: entry.answers.map(answer => answer.text) as [string, string, string, string],
    correct: correctIndexes[0] as 0 | 1 | 2 | 3
  };
}

// EASY EDIT ZONE:
// Add or change questions here. Put correct: true on exactly one answer.
// Use pointsMultiplier: 2 for double-points questions, or leave it out for normal points.
export const sleRounds: SleRound[] = [
  {
    title: "Caring Christian",
    definition: "To me, being a Caring Christian is more than just showing up at Mass every Friday at 8:00am. It's about actually noticing and doing something when someone is having a hard day, even if it's just a small act of kindness. Not just when someone is having a bad day, a Caring Christian follows Jesus' example by putting others before themselves in moments of their everyday life.",
    claim: "I personally feel that Caring Christian is my strongest SLE because I always look for ways to help my classmates and make sure everyone feels included in our school community.",
    evidence: "At Qofa, I think I have exemplified the Caring Christian SLE when I help my younger buddy or do a simple act, as simple as holding the door for someone or helping them with their stuff. I have also taken that mindset outside of school too. Since 7th grade, over the spring season, I've been running a fundraiser called Loquat4Humanity. I was born prematurely and spent three months in the NICU (Neonatal Intensive Care Unit), so when I found a loquat tree just sitting unused in my backyard, I saw a chance to give back. I started selling the fruit and donating the earnings to the same NICU that once cared for me and this past season, I raised over $500. That experience taught me that being a Caring Christian isn't just about small daily acts, it's also about looking at what you have and asking how it can help someone else. You can’t be perfect, but you can choose the right action everyday.",
    questions: [
      question({
        text: "What is something you can do to be a Caring Christian?",
        answers: [
          { text: "Study hard and never give up on assignments", correct: false },
          { text: "Stay active and eat healthy every day", correct: false },
          { text: "Notice when someone is struggling and do something about it", correct: true },
          { text: "Manage your time and meet your deadlines", correct: false }
        ],
        story: "Being a Caring Christian is helping someone who is struggling and acting with kindness."
      }),
      question({
        text: "What fruit did I use to raise over $500 for the NICU?",
        answers: [
          { text: "Mango", correct: false },
          { text: "Loquat", correct: true },
          { text: "Persimmon", correct: false },
          { text: "Fig", correct: false }
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
          { text: "Wait and hope it makes sense later", correct: false },
          { text: "Ask a question even if it sounds dumb", correct: true },
          { text: "Copy what the person next to them wrote", correct: false },
          { text: "Stare out the window and think about lunch", correct: false }
        ],
        story: "Personally, during 6th grade, I was scared to ask a question if I thought it sounded dumb, and all my questions sounded dumb back then. But now, building that confidence, I try to ask questions even if I think it sounds dumb.",
      }),
      question({
        text: "No matter how tired I am, what is something you will never catch me doing in class?",
        answers: [
          { text: "Asking too many questions", correct: false },
          { text: "Sleeping", correct: true },
          { text: "Taking notes", correct: false },
          { text: "Paying attention", correct: false }
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
          { text: "8th Grade Coordinator", correct: false },
          { text: "Head 8th Grade Coordinator", correct: true },
          { text: "Yearbook Editor", correct: false },
          { text: "Photo Manager", correct: false }
        ],
        story: "Being the Head 8th Grade Coordinator was an honor and working with Austin, Julia, Annie, and Hannah was the best part.",
        pointsMultiplier: 2
      }),
      question({
        text: "What does it mean to be Self-Confident and Responsible?",
        answers: [
          { text: "Always having the right answer", correct: false },
          { text: "Avoiding situations that make you nervous", correct: false },
          { text: "Believing in yourself and stepping up even when it's uncomfortable", correct: true },
          { text: "Only taking on roles you already know how to do", correct: false }
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
          { text: "Eat as much junk food as possible before practice", correct: false },
          { text: "Stay up late every night watching videos", correct: false },
          { text: "Make mindful food choices and keep the space around them positive", correct: true },
          { text: "Only focus on physical health and ignore everything else", correct: false }
        ],
        story: "When someone thinks of Healthy Individual, they think of someone who plays lots of sports. But something as simple as eating healthy and making the space around you positive is just as important."
      }),
      question({
        text: "What two sports did I play at QoFa?",
        answers: [
          { text: "Basketball and Soccer", correct: false },
          { text: "Soccer and Flag Football", correct: false },
          { text: "Basketball and Flag Football", correct: true },
          { text: "Volleyball and Basketball", correct: false }
        ],
        story: "Basketball and flag football were the two sports I played at Qofa."
      })
    ]
  }
];

export const questions = sleRounds.flatMap((round, roundIndex) =>
  round.questions.map((question, questionIndex) => ({
    ...question,
    round: round.title,
    roundIndex,
    questionIndex
  }))
);
