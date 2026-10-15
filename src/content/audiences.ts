import type { Audience } from "./types";

/** "Who it's for" pages at /for/<slug>/. Claims only from docs/PRODUCT_FACTS.md. */
export const AUDIENCES: Audience[] = [
  {
    slug: "coaching-institutes",
    label: "Coaching institutes",
    icon: "Trophy",
    title: "Online Test Series Software for Coaching Institutes (JEE, NEET, Boards)",
    description:
      "Run JEE, NEET, CUET and board-style mock test series online or on paper: sectioned papers with negative marking, instant rank and percentile, AI-checked subjective answers and scholarship tests that bring admissions.",
    eyebrow: "For coaching institutes",
    h1: "A test series your students will measure themselves by.",
    lede:
      "Weekly tests, full-length mocks, scholarship tests and doubt-clearing reports, run from one platform. Students get rank and percentile minutes after they submit; your faculty get the questions the batch got wrong.",
    hero: "leaderboard",
    pains: [
      { title: "Results take a week, by which time nobody cares", body: "Paper mocks get checked over the weekend, rank lists are made in Excel, and by the time results are out the next test is due." },
      { title: "The test series doesn't feel like the real exam", body: "Students need section timers, negative marking and an exam-style palette to build temperament. Google Forms gives them none of it." },
      { title: "Scholarship tests are a spreadsheet nightmare", body: "Registrations come in from forms, WhatsApp and walk-ins, and nobody knows who actually wrote the test." },
    ],
    workflow: [
      { title: "Build the paper", body: "Import past papers from Word, pick from your question bank or generate a chapter test with AI from your own notes." },
      { title: "Set it up like the real exam", body: "Physics, Chemistry and Maths sections with their own marks, negative marking, numeric-answer questions and a palette candidates already know." },
      { title: "Run it", body: "Students write at home or in your centre. Answers autosave; tab switches and camera checks keep it honest." },
      { title: "Publish rank and percentile instantly", body: "Release the moment the window closes. Every student sees rank, percentile, accuracy, time per section and how the class answered each question." },
      { title: "Teach from the data", body: "Question insights and the AI class diagnostic show which concepts the batch got wrong, so the next class starts from there." },
    ],
    picks: [
      { slug: "online-exams", why: "Exam-style sections, timers and palette." },
      { slug: "results-analytics", why: "Rank, percentile and question insights within minutes." },
      { slug: "registration", why: "Scholarship tests with registration pages and automated reminders." },
      { slug: "ai-question-paper-generator", why: "Chapter tests from your own material in minutes." },
    ],
    outcomes: [
      "Results on the same day as the test, not the next week",
      "A mock series that rehearses timing and negative marking",
      "Scholarship test registrants as verified, exportable leads",
      "Faculty teaching from question-level data",
    ],
    usecases: ["mock-test-series", "scholarship-entrance-tests", "practice-homework"],
    faqs: [
      { q: "Can I set JEE-style numeric-answer questions?", a: "Yes. Numeric questions accept integer or decimal answers, with more than one accepted value if needed, and are auto-marked." },
      { q: "Can students see their all-batch rank?", a: "Yes. Reports show rank and percentile among everyone who took the test, plus comparison with the class average and the topper." },
      { q: "Can I run the same test online for some students and on paper for others?", a: "Yes. Print the paper in shuffled sets for your centre, and run it online for students at home. Paper copies can be checked on screen or by AI, so results live in the same place." },
      { q: "Can parents get the result on WhatsApp?", a: "Result release can trigger WhatsApp messages through Automations, with rank and percentile." },
    ],
  },
  {
    slug: "schools",
    label: "Schools",
    icon: "School",
    title: "Exam Management Software for Schools: Online and Paper Exams",
    description:
      "Unit tests, half-yearly and pre-board exams for schools: print shuffled paper sets, check answer sheets on screen or with AI, publish report PDFs for every student, and run online quizzes and homework.",
    eyebrow: "For schools",
    h1: "From unit test to pre-board, without the weekend of checking.",
    lede:
      "Most school exams are still written on paper, and that's fine. Examezy prints the paper, helps teachers check the copies on screen or with AI, and turns marks into report PDFs and class insights, with online quizzes for everything in between.",
    hero: "paper",
    pains: [
      { title: "Teachers lose weekends to checking copies", body: "A teacher with five sections and a 40-mark paper checks hundreds of copies every term, by hand, on top of teaching." },
      { title: "Marks live in registers, not in decisions", body: "Nobody can see which chapter the whole grade struggled with until the report cards are already printed." },
      { title: "Parents want more than a number", body: "A total out of 80 says little about what the child should practise next." },
    ],
    workflow: [
      { title: "Set the paper", body: "Write it, import it from Word, or generate it with AI from your textbook with chapter weightage you choose." },
      { title: "Print it in sets", body: "Export multiple shuffled sets with roll number and invigilator fields, plus the answer key." },
      { title: "Scan the copies", body: "Scan the stack and upload it. AI matches each copy to the student by name and roll number." },
      { title: "Check on screen or with AI", body: "Teachers mark with pen and ticks on screen, or review AI-drafted marks and red-pen checked copies." },
      { title: "Share results", body: "Release results with a report PDF per student, and download every report in one ZIP for the PTM." },
    ],
    picks: [
      { slug: "paper-exams", why: "Print shuffled sets and collect answer sheets as PDFs." },
      { slug: "ai-answer-sheet-checking", why: "AI drafts marks on handwritten copies; teachers approve." },
      { slug: "results-analytics", why: "Report PDFs per student and question-level class insights." },
      { slug: "ai-question-paper-generator", why: "Balanced papers from your textbook with page citations." },
    ],
    outcomes: [
      "Copies checked in hours instead of weekends",
      "A report PDF for every student, in one download",
      "Chapter-level insight before the next term starts",
      "Online quizzes and homework on the same platform",
    ],
    usecases: ["school-exams", "practice-homework", "olympiads-talent-search"],
    faqs: [
      { q: "Do our exams have to move online?", a: "No. Examezy is built for paper exams too: print the paper, scan the answer sheets, check them on screen or with AI, and publish results online." },
      { q: "Can AI check handwritten answers in our subjects?", a: "AI checking reads handwriting, including maths, and marks against a rubric. Every mark is a draft a teacher reviews. Try it on a few of your own copies in the demo." },
      { q: "Can we generate papers from NCERT books?", a: "Yes, AI paper generation works from your knowledge base, including textbooks, and cites the source page for each question." },
      { q: "Can parents see the report?", a: "Students can download their report PDF, and result release can trigger WhatsApp or email messages through Automations." },
    ],
  },
  {
    slug: "colleges-universities",
    label: "Colleges & universities",
    icon: "GraduationCap",
    title: "Online Examination System for Colleges and Universities",
    description:
      "Internal assessments, semester exams and entrance tests for colleges: question banks shared across faculty, proctored online exams, on-screen evaluation by assigned evaluators, and department-wide result analytics.",
    eyebrow: "For colleges & universities",
    h1: "Internal assessments that run themselves, semester after semester.",
    lede:
      "Give every department one place to build question banks, run proctored internal tests, evaluate answer scripts on screen and see results by batch and evaluator, without a separate tool for each step.",
    hero: "dashboard",
    pains: [
      { title: "Every department runs exams differently", body: "Some use forms, some use paper, some use the LMS quiz, and nobody can compare results across batches." },
      { title: "Evaluation is slow and hard to track", body: "Answer scripts move between evaluators by hand, and the exam cell can't see what's checked and what's pending." },
      { title: "Integrity questions on online internals", body: "Without proctoring, online internal marks are hard to defend." },
    ],
    workflow: [
      { title: "Build shared banks", body: "Faculty contribute questions to an institute bank, tagged by subject and difficulty, reused across semesters." },
      { title: "Schedule internals", body: "Fixed windows, section timers, negative marking and random question order, assigned to batches." },
      { title: "Proctor online tests", body: "Full screen, tab-switch auto-submit and camera snapshots with a review timeline." },
      { title: "Evaluate with control", body: "Assign evaluators per assessment. They mark scripts on screen; the exam cell watches the backlog." },
      { title: "Analyse by batch and evaluator", body: "The dashboard shows score distributions, per-batch and per-evaluator statistics and students to follow up." },
    ],
    picks: [
      { slug: "proctoring", why: "Defensible online internals with snapshot timelines." },
      { slug: "evaluation", why: "On-screen evaluation and re-evaluation with access control." },
      { slug: "question-bank", why: "Shared banks across faculty and semesters." },
      { slug: "results-analytics", why: "Department-wide dashboard and student reports." },
    ],
    outcomes: [
      "One exam workflow across departments",
      "An evaluation backlog the exam cell can see",
      "Proctored internals with reviewable evidence",
      "Batch and evaluator analytics every semester",
    ],
    usecases: ["university-exams", "campus-hiring-tests", "surveys-feedback"],
    faqs: [
      { q: "Can we control which faculty evaluate which exam?", a: "Yes. Each assessment's access settings decide who can edit it, who sees reports and who evaluates, by role or by named user." },
      { q: "Can students upload handwritten answer scripts?", a: "Yes. For remote written exams students upload one PDF; for hall exams the exam cell uploads scans." },
      { q: "Can we use it for course feedback surveys?", a: "Yes. Surveys are their own assessment type with a survey report of option percentages and free-text answers." },
      { q: "Can it run on our own domain and brand?", a: "Yes, Examezy runs on Vacademy's white-label portals with your domain and branding." },
    ],
  },
  {
    slug: "corporate-hiring",
    label: "Hiring & HR teams",
    icon: "Briefcase",
    title: "Online Assessment Platform for Hiring: Aptitude and Coding Tests",
    description:
      "Screen candidates with proctored online tests: aptitude MCQs, coding questions with hidden test cases, public registration links, instant rank lists and camera snapshots for review.",
    eyebrow: "For hiring & HR teams",
    h1: "Shortlist on skill, not on CVs.",
    lede:
      "Send one link to every applicant. They register, take a proctored aptitude and coding test, and you get a ranked shortlist with snapshot timelines the moment the window closes.",
    hero: "coding",
    pains: [
      { title: "Hundreds of CVs, no fair way to compare", body: "Screening by CV favours keyword-stuffing. A short test tells you more in 40 minutes than a stack of resumes." },
      { title: "Unproctored tests invite help", body: "Without basic checks, take-home tests measure who has the best friend." },
      { title: "Campus drives are chaos", body: "Collecting registrations, sending links, chasing no-shows and building rank lists eats the HR team's week." },
    ],
    workflow: [
      { title: "Open registration", body: "A public test page with your own fields: college, degree, graduation year, role applied for." },
      { title: "Build the round", body: "An aptitude MCQ section and a coding section, each with its own timer." },
      { title: "Proctor it", body: "Camera check-in, face checks, snapshots and auto-submit rules; full screen and tab-switch limits always on." },
      { title: "Shortlist", body: "Rank list with percentile and section scores, exported with your registration fields." },
      { title: "Review edge cases", body: "Open any attempt's proctoring timeline before you call the candidate." },
    ],
    picks: [
      { slug: "coding-tests", why: "Hidden test cases, six languages, proportional marks." },
      { slug: "proctoring", why: "Camera checks without video, auto-submit rules." },
      { slug: "registration", why: "One public link for every applicant." },
      { slug: "results-analytics", why: "Rank lists and exports for the shortlist." },
    ],
    outcomes: [
      "A ranked shortlist the same day",
      "Evidence for every flagged attempt",
      "Campus drives without spreadsheet chaos",
      "Coding skill measured, not claimed",
    ],
    usecases: ["campus-hiring-tests", "training-assessments"],
    faqs: [
      { q: "Can candidates take the test without an account?", a: "Candidates register on your public page and verify by OTP, which gives you verified contact details for everyone who applied." },
      { q: "Which coding languages can candidates use?", a: "Python, JavaScript, C, C++, Java and Go." },
      { q: "Do you offer psychometric or personality tests?", a: "No. Examezy is for skill tests you author: aptitude, domain knowledge and coding." },
      { q: "Can we review a flagged candidate?", a: "Yes. Each attempt has a proctoring timeline with events and snapshots." },
    ],
  },
  {
    slug: "training-certification",
    label: "Training & certification",
    icon: "Medal",
    title: "Assessment Software for Training Institutes and Certification Bodies",
    description:
      "Run course-end assessments, skill tests and certification exams with proctoring, sectioned papers, cutoff marks, teacher or AI evaluation and branded reports for every candidate.",
    eyebrow: "For training & certification",
    h1: "Assessments your certificates can stand on.",
    lede:
      "Whether you run vocational batches, professional courses or a certification programme, Examezy gives you proctored exams, section cutoffs, evaluator workflows and reports that make your results defensible.",
    hero: "proctor",
    pains: [
      { title: "Results need to be defensible", body: "A certificate is only worth the assessment behind it. Unproctored, unaudited tests undermine the credential." },
      { title: "Practical and theory are assessed in different places", body: "Objective theory in one tool, written answers on paper, scores in a spreadsheet." },
      { title: "Batches across cities", body: "Trainers in different centres need the same paper, the same rules and one result sheet." },
    ],
    workflow: [
      { title: "Set the paper", body: "Sections with cutoff marks, negative marking and random order; objective and long-answer questions together." },
      { title: "Assign batches anywhere", body: "Same test for every centre, each with its own window if needed." },
      { title: "Proctor", body: "Browser rules plus camera checks with snapshot timelines." },
      { title: "Evaluate", body: "Auto-marking for objective parts; evaluators or AI for written answers, with release holds." },
      { title: "Report", body: "Per-candidate report PDFs and bulk ZIPs; automations notify candidates on release." },
    ],
    picks: [
      { slug: "proctoring", why: "Evidence trail for every attempt." },
      { slug: "evaluation", why: "Evaluator access and release holds." },
      { slug: "online-exams", why: "Sections with cutoffs and strict timing." },
      { slug: "results-analytics", why: "Report PDFs per candidate." },
    ],
    outcomes: [
      "One exam standard across every centre",
      "Reviewable proctoring evidence",
      "Theory and written answers in one result",
      "Reports ready to hand to candidates",
    ],
    usecases: ["training-assessments", "university-exams"],
    faqs: [
      { q: "Does Examezy issue certificates?", a: "Not from the assessment itself. Examezy gives you scores, section cutoffs and report PDFs; certificates are issued from your course or your existing process." },
      { q: "Can I set a cutoff per section?", a: "Yes, each section can carry cutoff marks." },
      { q: "Is there a lockdown browser?", a: "No. Integrity comes from full-screen enforcement, tab-switch limits, camera checks and snapshot timelines." },
      { q: "Can trainers in different cities evaluate?", a: "Yes. Evaluator access is set per assessment, by role or named user, and evaluation happens in the browser." },
    ],
  },
  {
    slug: "edtech-test-publishers",
    label: "EdTech & test publishers",
    icon: "Layers",
    title: "White-Label Test Platform for EdTech Companies and Test Publishers",
    description:
      "Launch your own branded test-series platform: your domain and brand, question bank and AI paper generation, mock tests with rank and percentile, AI reports per learner and automations that keep learners coming back.",
    eyebrow: "For edtech & test publishers",
    h1: "Your brand on the test. Our engine underneath.",
    lede:
      "Sell test series under your own name. Examezy runs on white-label portals with your domain and brand, with the question bank, mock-test engine, analytics and AI reports your learners expect from a serious test platform.",
    hero: "report",
    pains: [
      { title: "Building a test engine is a distraction", body: "Timers, autosave, scale, marking rules, rank lists: it takes a year to build well and never stops needing work." },
      { title: "Learners compare you to the big platforms", body: "Rank, percentile, detailed solutions and analytics are table stakes." },
      { title: "Content scales slower than demand", body: "Writing thousands of quality questions takes time your team doesn't have." },
    ],
    workflow: [
      { title: "Brand it", body: "Your domain, logo and colours on a white-label portal." },
      { title: "Load your content", body: "Import from Word, digitise printed books, generate with AI from your material." },
      { title: "Publish series", body: "Mocks open any time with fixed duration; practice sets untimed; live tests in a window." },
      { title: "Delight learners", body: "Instant rank, percentile, option-wise class stats and AI reports with a learning path." },
      { title: "Bring them back", body: "Automations message learners on new tests, reminders and results." },
    ],
    picks: [
      { slug: "results-analytics", why: "Analytics learners compare you on." },
      { slug: "question-bank", why: "Your content, organised and reusable." },
      { slug: "ai-question-paper-generator", why: "Grow the bank faster from your own books." },
      { slug: "online-exams", why: "Tested with 1,000 simultaneous test-takers." },
    ],
    outcomes: [
      "A branded test platform without building one",
      "Analytics on par with large test-prep apps",
      "Content production sped up by AI",
      "Re-engagement on autopilot",
    ],
    usecases: ["mock-test-series", "practice-homework", "olympiads-talent-search"],
    faqs: [
      { q: "Can we use our own domain?", a: "Yes, through Vacademy's white-label portals with your domain and branding." },
      { q: "Can learners buy test series inside the platform?", a: "Selling courses and memberships is part of Vacademy; ask us in the demo how we'd set up paid access for your series. Fee collection is not part of the test registration page itself." },
      { q: "How many learners can take a test at once?", a: "We load-tested the full journey with 1,000 simultaneous test-takers on production with zero errors. Larger single-window events can be planned with us." },
      { q: "Do learners get detailed solutions?", a: "Yes. Question-wise review shows the correct answer, your explanation and what percentage of learners chose each option." },
    ],
  },
];

export const findAudience = (slug: string) => AUDIENCES.find((a) => a.slug === slug);
