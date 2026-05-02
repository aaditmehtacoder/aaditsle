export type Question = {
  text: string;
  answers: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  story: string;
  pointsMultiplier?: 1 | 2;
};

export type SleRound = {
  title: string;
  definition: string;
  claim: string;
  evidence: string;
  questions: Question[];
};

// EASY EDIT ZONE: update this file with your real stories before presentation day.
export const sleRounds: SleRound[] = [
  {
    title: "Caring Christian",
    definition: "To me, being a Caring Christian is more than just going to Mass. It's about actually seeing when someone is having a bad day and doing something about it, even if it's just a small gesture. It’s following Jesus' example by putting others before myself in the little moments of the day.",
    claim: "I feel that Caring Christian is my strongest SLE because I consistently look for ways to help my classmates and make sure everyone feels included in our school community.",
    evidence: "Being a Caring Christian at QoA has taught me that my actions have a real impact on others. Whether I'm helping my younger buddy with a craft or just holding the door for someone, those small choices build the kind of community I'm proud to be a part of. It’s not about being perfect, it’s about choosing kindness every single day.",
    questions: [
      {
        text: "If you see a classmate sitting alone at lunch looking upset, what would a Caring Christian do?",
        answers: ["Walk past and ignore them", "Go over and ask if they're okay", "Tell a teacher later", "Take a picture for social media"],
        correct: 1,
        story: "Kindness is about action. Going over to someone might seem small, but it can change their whole day."
      },
      {
        text: "What is a way I've tried to show I care about our school community at QoA?",
        answers: ["Organizing a secret snack club", "Helping my younger buddy with projects", "Always being the first to leave", "Volunteering to clean the lunch tables"],
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
        answers: ["Skip it and move on", "Copy the answer from a friend", "Ask for help and keep trying", "Close your notebook and sleep"],
        correct: 2,
        story: "Learning isn't about knowing everything right away; it's about the effort you put in to understand it."
      },
      {
        text: "What was the biggest challenge I faced while building this custom quiz game?",
        answers: ["Choosing the background color", "Debugging the real-time scores", "Typing my name correctly", "Finding the login button"],
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
        answers: ["Hide it and hope it's not checked", "Admit the mistake and turn it in late", "Blame the printer or the dog", "Ask the teacher to cancel it"],
        correct: 1,
        story: "Responsibility is about owning your actions, even the ones you wish you could undo."
      },
      {
        text: "What is a leadership role or responsibility I took on during my time at QoA?",
        answers: ["Chief of the Pencil Sharpeners", "Captain of the Basketball team", "Being a Student Council rep", "Master of the Silent Game"],
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
        answers: ["Eating three bags of chips", "Going for a run or playing a sport", "Staying up all night on a screen", "Complaining to everyone you see"],
        correct: 1,
        story: "Staying active helps clear my head and keeps me ready for whatever comes next."
      },
      {
        text: "Which two sports have been the most important part of my journey to becoming a Healthy Individual?",
        answers: ["Basketball and Flag Football", "Fencing and Water Polo", "Bowling and Chess", "Soccer and Swimming"],
        correct: 0,
        story: "Basketball and flag football have been my favorite ways to stay active and healthy throughout middle school. They've taught me how to handle pressure, respect my body, and balance my sports schedule with my homework. Staying physically fit has really helped me stay mentally sharp in the classroom as well.",
        pointsMultiplier: 2
      }
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
