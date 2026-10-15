import type { Faq } from "./types";

/**
 * Blog registry and bodies. Rendered by src/app/blog/[slug]/page.tsx through BlogShell. Drives /blog/, the
 * sitemap, llms-full.txt and the "From the blog" block on any page listed in a post's `pages`.
 * General advice is fine; anything about Examezy itself must be in docs/PRODUCT_FACTS.md.
 */
export interface PostSection {
  id: string;
  h: string;
  paras?: string[];
  list?: string[];
  ordered?: boolean;
  table?: { head: string[]; rows: string[][]; caption?: string };
  /** Paragraphs after the list/table. */
  after?: string[];
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: "Guides" | "Proctoring" | "Results" | "Question papers" | "Evaluation";
  published: string; // YYYY-MM-DD
  updated?: string;
  readMins: number;
  keywords: string[];
  pages?: string[];
  takeaways: string[];
  sections: PostSection[];
  /** "Where Examezy fits" paragraphs. */
  fits: string[];
  faqs?: Faq[];
}

export const POSTS: Post[] = [
  {
    slug: "how-to-conduct-online-exam",
    title: "How to Conduct an Online Exam: A 12-Step Checklist for Institutes",
    description:
      "A practical checklist for conducting online exams: choosing the format, building the paper, timing, marking rules, proctoring, a dry run, exam-day monitoring, evaluation and publishing results.",
    category: "Guides",
    published: "2026-10-15",
    readMins: 8,
    keywords: ["how to conduct online exam", "online exam checklist", "conduct online test for students", "online examination process", "online exam best practices"],
    pages: ["/online-exams/", "/how-it-works/", "/for/colleges-universities/", "/for/schools/"],
    takeaways: [
      "Decide the format (live window, self-paced mock or practice) before you write a single question.",
      "Mirror the real exam's sections, timing and marking so the result means something.",
      "Run a dry run with five people a week before: it catches 90% of exam-day problems.",
      "Plan the evaluation and result release up front, not after the exam closes.",
    ],
    sections: [
      {
        id: "before",
        h: "Before the exam: decide the format",
        paras: [
          "Most online exam problems are decided long before exam day. The first choice is the format. A live exam runs in a fixed window, and everyone writes at the same time; this is right for internals, scholarship tests and anything ranked. A self-paced mock stays open with a fixed duration, which suits test series. A practice test is untimed and exists to teach, not to rank.",
          "Write the format down along with who is taking it, how results will be used, and who checks any written answers. Those four lines answer most of the questions your team will ask later.",
        ],
      },
      {
        id: "checklist",
        h: "The 12-step checklist",
        ordered: true,
        list: [
          "Fix the format: live window, self-paced mock or practice.",
          "Build the paper from your question bank, an imported Word file or an AI draft you have reviewed.",
          "Split it into sections that mirror the real exam, each with its own marks and negative marking.",
          "Choose timing: one duration, per-section timers, or per-question timers, and whether time-out submits automatically.",
          "Decide question order: shuffle within sections so neighbours see different orders.",
          "Pick integrity rules: full screen and tab-switch limits at minimum; camera checks for anything ranked or certified.",
          "Write the instructions: how long, how many sections, what happens on a tab switch, what to do if the internet drops.",
          "Assign candidates by batch, or open a registration page for public tests.",
          "Schedule reminders for the day before and an hour before.",
          "Run a dry run with five people on different devices and networks.",
          "On exam day, watch the Ongoing and Pending lists and remind no-shows.",
          "Evaluate, review and release results on the schedule you announced.",
        ],
      },
      {
        id: "dry-run",
        h: "Why the dry run matters",
        paras: [
          "A dry run with a handful of colleagues on phones, old laptops and patchy Wi-Fi will surface instruction gaps, wrong answer keys and timing mistakes while they are still cheap to fix. Ask each tester to switch tabs once and to turn their Wi-Fi off for thirty seconds, so you know exactly what candidates will see.",
        ],
      },
      {
        id: "exam-day",
        h: "On exam day",
        paras: [
          "Keep one person on monitoring and one on candidate support. Most support requests are about camera permission, a browser that isn't up to date, or a candidate who started late. Have a short written answer ready for each.",
        ],
        list: [
          "Open the monitoring console 15 minutes before start.",
          "Send a reminder to anyone in Pending five minutes after start.",
          "Log every exception (a granted reattempt, a technical issue) in one place.",
        ],
      },
      {
        id: "after",
        h: "After the exam: evaluation and results",
        paras: [
          "Objective questions should be marked the moment the exam ends. For written answers, decide in advance who evaluates and by when. If you use AI to draft marks, budget time for teachers to review before release.",
          "Publish when you said you would. A result that arrives the same day is a learning moment; one that arrives two weeks later is just a number.",
        ],
      },
    ],
    fits: [
      "Examezy covers every step above in one place: <strong>sections, timers, negative marking, shuffled order, full-screen and tab-switch rules, camera proctoring, batch or public registration, a live monitoring console, auto-marking, on-screen and AI evaluation, and release on your schedule.</strong>",
    ],
    faqs: [
      { q: "How long should an online exam be?", a: "Match the real exam if you're rehearsing for one. For internal tests, 45 to 90 minutes keeps attention and limits connection risk." },
      { q: "What if a student's internet drops?", a: "Use a platform that saves answers on the device and syncs them, and tell students in the instructions what they'll see if the connection drops." },
    ],
  },
  {
    slug: "online-exam-proctoring-guide",
    title: "Online Exam Proctoring: What Works, What Doesn't, and What It Costs Candidates",
    description:
      "An honest guide to online proctoring methods (browser rules, camera snapshots, AI face detection, live invigilators, lockdown browsers): what each catches, its cost to candidates, and how to choose.",
    category: "Proctoring",
    published: "2026-10-15",
    readMins: 8,
    keywords: ["online exam proctoring", "remote proctoring", "AI proctoring", "how does online proctoring work", "proctoring software for exams"],
    pages: ["/proctoring/", "/security/", "/for/corporate-hiring/", "/for/training-certification/"],
    takeaways: [
      "Proctoring is a deterrent first and a detector second; visible rules prevent most cheating.",
      "Every method has a cost: bandwidth, privacy, installation friction or human time.",
      "Match the method to the stakes: practice tests need none, ranked exams need browser rules and camera checks.",
      "Decide what a flag means before the exam, not after.",
    ],
    sections: [
      {
        id: "methods",
        h: "The main proctoring methods",
        table: {
          head: ["Method", "What it catches", "Cost to candidates"],
          rows: [
            ["Browser rules (full screen, tab-switch limits, copy blocked)", "Searching answers in another tab, copy-paste", "Almost none"],
            ["Camera snapshots", "Someone else writing, a second person in the room", "Camera permission; little bandwidth"],
            ["On-device face detection", "No face or multiple faces, in real time", "Camera permission; runs locally"],
            ["Continuous video recording", "Most visible behaviour, for later review", "High bandwidth, privacy concerns, review hours"],
            ["Live human invigilators", "Behaviour in real time, with judgement", "Scheduling, cost, stable video connection"],
            ["Lockdown browsers", "Other apps and tabs entirely", "Installation, device compatibility issues"],
          ],
        },
        after: [
          "No method catches everything. A phone below the camera's view defeats most of them. That's why proctoring works best as a visible deterrent combined with question design that makes copying less useful: shuffled order, application questions and a time limit that leaves no room to search.",
        ],
      },
      {
        id: "stakes",
        h: "Match the method to the stakes",
        list: [
          "Practice and homework: no proctoring. The point is learning.",
          "Weekly tests and mocks: browser rules, with tab-switch auto-submit.",
          "Ranked mocks, scholarship tests, internals: browser rules plus camera snapshots and face checks.",
          "Certification and hiring: the above, with a camera required to start and a clear violation limit.",
        ],
      },
      {
        id: "flags",
        h: "Decide what a flag means",
        paras: [
          "A flag isn't proof. Cameras lose focus, siblings walk past, Wi-Fi drops. Decide in advance whether flags auto-submit after a limit or only get recorded for a human to judge, and say so in the instructions. Candidates behave better when they know the rules, and you avoid arguments later.",
          "When you review, look at the timeline: one 'no face' event during a 90-minute exam is noise; a cluster of tab switches followed by a jump in correct answers deserves a conversation.",
        ],
      },
      {
        id: "privacy",
        h: "Privacy is part of fairness",
        paras: [
          "Streaming video from a teenager's bedroom is a big ask. Methods that run detection on the candidate's device and upload only occasional stills collect far less, which is easier to justify to parents and easier to store responsibly.",
        ],
      },
    ],
    fits: [
      "Examezy's proctoring is deliberately light: <strong>full screen, tab-switch warnings with auto-submit on the third switch, copy and paste blocked, and optional camera proctoring that counts faces on the candidate's device and uploads small snapshots, never video.</strong> You choose auto-submit after 3, 5 or 10 flags, or record only.",
      "It doesn't offer a lockdown browser, ID matching or live invigilators. If you need those, we'll tell you so in the demo.",
    ],
    faqs: [
      { q: "Can online proctoring detect a phone?", a: "Most camera-based methods can't reliably see a phone held below the camera. Use time limits and application questions to reduce what a phone can help with." },
      { q: "Is AI proctoring legal in India?", a: "Collecting images of candidates is personal data processing. Tell candidates what you collect and why, collect the minimum, and follow your institution's data policy." },
    ],
  },
  {
    slug: "negative-marking-explained",
    title: "Negative Marking Explained: How to Set It and When Not To",
    description:
      "What negative marking is, how common schemes like +4/−1 and +1/−0.25 work, the maths of guessing, and when negative marking helps or hurts your test.",
    category: "Question papers",
    published: "2026-10-15",
    readMins: 6,
    keywords: ["negative marking", "negative marking in exams", "+4 -1 marking scheme", "negative marking formula", "should I guess in negative marking"],
    pages: ["/online-exams/", "/question-types/", "/use-cases/mock-test-series/"],
    takeaways: [
      "Negative marking deducts marks for wrong answers to discourage blind guessing.",
      "With 4 options, a penalty of one-third of the marks makes a blind guess worth zero on average.",
      "Use it when your real exam does, so students practise the decision to skip.",
      "Leave it off for practice tests where you want students to attempt everything.",
    ],
    sections: [
      {
        id: "what",
        h: "What negative marking is",
        paras: [
          "Negative marking takes marks away for a wrong answer and gives zero for a question left blank. It exists to make guessing a decision rather than a free lottery ticket.",
        ],
      },
      {
        id: "maths",
        h: "The maths of guessing",
        paras: [
          "Take a 4-option MCQ worth +4 with a −1 penalty. A blind guess is right one time in four: the expected score is (¼ × 4) + (¾ × −1) = +0.25 per question. A small positive edge. If the student can eliminate one option, the odds become one in three: (⅓ × 4) + (⅔ × −1) = +0.67. Eliminating two options makes it +1.5.",
          "For a +1 / −0.25 scheme with 4 options, a blind guess is worth (¼ × 1) + (¾ × −0.25) ≈ +0.06: close to neutral. To make it exactly zero, the penalty has to be one-third of the marks (−0.33 on a 1-mark question), because the three wrong options must cancel the one right one.",
        ],
        table: {
          head: ["Scheme", "Options", "Blind guess (expected)", "After eliminating one option"],
          rows: [
            ["+4 / −1", "4", "+0.25", "+0.67"],
            ["+1 / −0.25", "4", "+0.06", "+0.17"],
            ["+1 / −0.33", "4", "0.00", "+0.11"],
            ["+2 / −0.5", "4", "+0.13", "+0.33"],
          ],
          caption: "Expected marks per question attempted, by marking scheme.",
        },
      },
      {
        id: "when",
        h: "When to use it, and when not to",
        list: [
          "Use it in mocks for exams that have it, so students practise the skip-or-attempt decision under time pressure.",
          "Use it in ranked tests where lucky guesses would distort the rank list.",
          "Skip it in practice tests and homework: you want every question attempted so you can see what they don't know.",
          "Skip it for questions with many possible answers (numeric, one word) unless the real exam penalises them.",
        ],
      },
      {
        id: "teaching",
        h: "Teach the strategy, not just the rule",
        paras: [
          "The best use of negative marking in a mock is the analysis afterwards: how many marks did the student lose to wrong attempts, and in which section? A student losing 20 marks to guesses in one subject has a different problem from one who leaves 15 questions blank.",
        ],
      },
    ],
    fits: [
      "On Examezy, negative marking is set <strong>per section</strong>, alongside default marks, cutoffs and question order, and every student's report shows marks gained and lost, accuracy and time by section.",
    ],
  },
  {
    slug: "rank-vs-percentile",
    title: "Rank vs Percentile in Test Series: What They Mean and How They're Calculated",
    description:
      "Rank and percentile explained for students and coaching institutes: how each is calculated, how ties work, why percentile travels between test sizes, and how to read both in a mock test report.",
    category: "Results",
    published: "2026-10-15",
    readMins: 6,
    keywords: ["rank vs percentile", "how is percentile calculated", "percentile in mock test", "percentile vs percentage", "test series rank"],
    pages: ["/results-analytics/", "/for/coaching-institutes/", "/use-cases/mock-test-series/"],
    takeaways: [
      "Percentage is about your marks; percentile is about the people below you.",
      "Rank depends on how many people wrote; percentile lets you compare across test sizes.",
      "Ties share a rank; how the next rank is numbered depends on the convention used.",
      "Read percentile trends across mocks, not one mock in isolation.",
    ],
    sections: [
      {
        id: "definitions",
        h: "Percentage, rank and percentile",
        list: [
          "Percentage: your marks as a share of the maximum. 180 out of 300 is 60%.",
          "Rank: your position when everyone is sorted by marks. The topper is rank 1.",
          "Percentile: the share of test-takers who scored at or below you (definitions vary slightly). A 95 percentile means you did as well as or better than 95% of the group.",
        ],
      },
      {
        id: "example",
        h: "A worked example",
        paras: [
          "Imagine 400 students write a mock. You score 182 and 360 students scored less than you. Using the common 'below me' definition, your percentile is 360 ÷ 400 × 100 = 90. If 39 students scored more than you, your rank is 40.",
          "Now imagine the same performance in a mock with 4,000 students. Your rank might be 400, which feels worse, but your percentile would still be around 90. That's why percentile is the better number to track across tests of different sizes.",
        ],
      },
      {
        id: "ties",
        h: "How ties work",
        paras: [
          "Students with identical marks share a rank. Some systems then skip ranks (1, 2, 2, 4) and some don't (1, 2, 2, 3). Many test series break ties by time taken or by marks in a priority subject. Whatever convention you use, state it in the result notice.",
        ],
      },
      {
        id: "reading",
        h: "How students should read the report",
        list: [
          "Track percentile across mocks; one test is noise, five is a trend.",
          "Compare section-wise scores with the topper and the class average.",
          "Look at the questions most of the class got right that you got wrong: they're the cheapest marks to win back.",
        ],
      },
    ],
    fits: [
      "Every Examezy report shows <strong>score, rank and percentile</strong>, a comparison with the class average, highest and lowest, section-wise accuracy and time, and what percentage of the class chose each option on every question.",
    ],
  },
  {
    slug: "question-paper-blueprint",
    title: "How to Make a Question Paper Blueprint (with a Weightage Table Template)",
    description:
      "A step-by-step guide to designing a question paper blueprint: unit weightage, question types, difficulty and cognitive levels, with a sample blueprint table you can copy.",
    category: "Question papers",
    published: "2026-10-15",
    readMins: 7,
    keywords: ["question paper blueprint", "blueprint of question paper", "weightage table", "how to set a question paper", "question paper design"],
    pages: ["/ai-question-paper-generator/", "/question-bank/", "/for/schools/"],
    takeaways: [
      "A blueprint decides marks per unit, question type and difficulty before any question is written.",
      "It's the single best protection against an unbalanced paper.",
      "Write questions to fill the blueprint, not the other way round.",
      "Keep the blueprint; it makes the next paper ten times faster.",
    ],
    sections: [
      {
        id: "what",
        h: "What a blueprint is",
        paras: [
          "A blueprint is a table that says how many marks each unit carries, in what question types, at what difficulty or cognitive level. It turns 'set a paper on chapters 1 to 6' into a specification anyone could write questions against.",
        ],
      },
      {
        id: "steps",
        h: "Five steps to a blueprint",
        ordered: true,
        list: [
          "List the units and decide each one's weightage, usually in proportion to teaching time or syllabus importance.",
          "Choose the question types and their marks: for example, 1-mark MCQs, 2-mark short answers, 5-mark long answers.",
          "Set the cognitive mix: roughly how much is recall, understanding, application and analysis.",
          "Fill the grid: units down the side, question types across the top, marks in each cell, totals that add up.",
          "Write or pick questions to fill each cell, and check the totals one last time.",
        ],
      },
      {
        id: "sample",
        h: "A sample blueprint (40 marks)",
        table: {
          head: ["Unit", "MCQ (1)", "Short (2)", "Long (5)", "Total"],
          rows: [
            ["Unit 1", "3", "4", "5", "12"],
            ["Unit 2", "2", "2", "5", "9"],
            ["Unit 3", "3", "4", "0", "7"],
            ["Unit 4", "2", "0", "5", "7"],
            ["Unit 5", "0", "0", "5", "5"],
            ["Total", "10", "10", "20", "40"],
          ],
          caption: "Marks per unit by question type. Adjust to your syllabus.",
        },
      },
      {
        id: "checks",
        h: "Final checks before printing",
        list: [
          "Do the totals add up per row, per column and overall?",
          "Is every unit tested in at least one question type?",
          "Can a well-prepared student finish in the time allowed?",
          "Are the answer key and model answers written?",
        ],
      },
    ],
    fits: [
      "Examezy's AI paper generator starts from a plan: <strong>choose the syllabus and the weightage, see the plan, then generate</strong>. Questions from your knowledge base cite their source page, and the paper exports as a print-ready PDF, in shuffled sets with an answer key if you want.",
    ],
  },
  {
    slug: "reduce-answer-sheet-checking-time",
    title: "How Schools Cut Answer-Sheet Checking Time Without Lowering Standards",
    description:
      "Practical ways to reduce the hours teachers spend checking answer sheets: better papers, marking schemes, objective sections, on-screen marking and AI-drafted marks with teacher review.",
    category: "Evaluation",
    published: "2026-10-15",
    readMins: 7,
    keywords: ["answer sheet checking", "reduce teacher workload checking", "on-screen marking", "AI answer sheet evaluation", "copy checking for teachers"],
    pages: ["/evaluation/", "/ai-answer-sheet-checking/", "/paper-exams/", "/for/schools/"],
    takeaways: [
      "The biggest saving comes before the exam: a clear marking scheme makes every copy faster.",
      "Move recall questions into an objective section that marks itself.",
      "Checking on screen removes the logistics of carrying, counting and totalling.",
      "AI drafts are a first pass, not a verdict: teachers review and release.",
    ],
    sections: [
      {
        id: "scheme",
        h: "Start with the marking scheme",
        paras: [
          "Teachers slow down when they have to decide what an answer deserves, copy after copy. A marking scheme that lists the points expected for each mark removes most of that hesitation, and it makes marks consistent between teachers.",
        ],
      },
      {
        id: "objective",
        h: "Let the objective part mark itself",
        paras: [
          "Recall questions (definitions, facts, single-step calculations) can be MCQs or one-word answers taken online or on a separate sheet. A 20-mark objective section that marks itself halves the checking for a 40-mark paper.",
        ],
      },
      {
        id: "onscreen",
        h: "Check on screen",
        paras: [
          "Scanning copies and checking them in the browser removes the bundle-carrying, the totalling and the transcription into a register. Marks are entered per question as you go, totals add themselves, and the student's checked copy is ready to share.",
        ],
      },
      {
        id: "ai",
        h: "Use AI for the first pass",
        paras: [
          "AI can now read most handwriting, apply a rubric and draft marks with short feedback. Used well, it turns checking into reviewing: the teacher reads the AI's marks beside the answer and changes the ones that are wrong. Used badly, it publishes marks nobody looked at. Always keep a teacher between the AI and the student.",
        ],
        list: [
          "Write a model answer for every long question.",
          "Scan clearly: flat pages, good light or a proper scanner.",
          "Review flagged and borderline copies first.",
          "Spot-check a sample of the rest before release.",
        ],
      },
    ],
    fits: [
      "On Examezy, teachers <strong>check scanned copies on screen with pen, tick, cross and text tools</strong>, or turn on <strong>AI checking</strong> to get red-pen checked copies with draft marks per question. AI marks are always drafts; teachers review and release.",
    ],
  },
  {
    slug: "how-to-analyse-mock-test",
    title: "How to Analyse a Mock Test: A Step-by-Step Method for Students",
    description:
      "A method for analysing mock tests that actually raises scores: sort every question into four buckets, track silly mistakes, time per section, and turn the analysis into a plan before the next mock.",
    category: "Results",
    published: "2026-10-15",
    readMins: 6,
    keywords: ["how to analyse mock test", "mock test analysis", "mock test strategy", "improve mock test score", "test series analysis"],
    pages: ["/results-analytics/", "/use-cases/mock-test-series/", "/for/coaching-institutes/"],
    takeaways: [
      "Spend as long analysing a mock as you spent writing it.",
      "Sort every question into one of four buckets; each bucket has a different fix.",
      "Silly mistakes are a pattern, not bad luck: log them.",
      "End every analysis with three actions for the next mock.",
    ],
    sections: [
      {
        id: "buckets",
        h: "The four buckets",
        table: {
          head: ["Bucket", "What it means", "The fix"],
          rows: [
            ["Right, and confident", "You know it", "Nothing; move on"],
            ["Right, but guessed", "Lucky", "Revise the concept as if you got it wrong"],
            ["Wrong, but knew it", "Silly mistake", "Log the type: misread, calculation, rushed"],
            ["Wrong or skipped, didn't know", "Gap", "Study the concept, then do 10 practice questions"],
          ],
        },
      },
      {
        id: "time",
        h: "Look at time, not just marks",
        paras: [
          "Compare time spent per section with the marks you earned there. A section that took 40% of the time for 20% of the marks is costing you. Also look for questions where you spent several minutes and still got them wrong: those are the ones to skip next time.",
        ],
      },
      {
        id: "class",
        h: "Use the class data",
        paras: [
          "If most of the class got a question right and you didn't, that's an easy mark you gave away. If most got it wrong, don't panic: it was hard for everyone. The option-wise percentages in your report tell you which.",
        ],
      },
      {
        id: "plan",
        h: "Turn it into three actions",
        list: [
          "One concept to study before the next mock.",
          "One silly-mistake habit to fix (for example: underline what the question asks).",
          "One time rule (for example: skip any question after two minutes on the first pass).",
        ],
      },
    ],
    fits: [
      "Examezy reports give students the raw material for this method: <strong>question-wise review with explanations, time per section, what percentage of the class chose each option, and an AI report with strengths, misconceptions and a learning path.</strong>",
    ],
  },
];

export const postPath = (slug: string) => `/blog/${slug}/`;
export const findPost = (slug: string) => POSTS.find((p) => p.slug === slug);
