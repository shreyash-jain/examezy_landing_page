import type { UseCase } from "./types";

/** Use-case recipes at /use-cases/<slug>/. Claims only from docs/PRODUCT_FACTS.md. */
export const USECASES: UseCase[] = [
  {
    slug: "mock-test-series",
    label: "Mock test series",
    icon: "Trophy",
    title: "How to Run an Online Mock Test Series (JEE, NEET, CUET, Banking)",
    description:
      "Set up a mock test series that rehearses the real exam: sections, timers, negative marking, numeric answers, instant rank and percentile, and analysis students act on before the next mock.",
    h1: "Mock test series that rehearse the real exam, not just the syllabus.",
    lede:
      "A mock is only useful if it feels like exam day and the analysis arrives while the student still remembers the paper. Here's the setup institutes use on Examezy.",
    hero: "leaderboard",
    setup: [
      { title: "Choose the Mock type", body: "Mocks stay open with a fixed duration, so students can write when they're ready. Use the Exam type for a live all-batch mock in a fixed window." },
      { title: "Mirror the real paper's sections", body: "One section per subject, each with default marks and negative marking. Use numeric-answer questions where the real exam does." },
      { title: "Lock the timing", body: "Set one duration for the paper, or per-section timers if your exam has them, and turn on auto-submit at time-out." },
      { title: "Turn on integrity rules", body: "Full screen and tab-switch limits apply by default; add camera proctoring for all-India rank mocks." },
      { title: "Release instantly", body: "Release on submission for self-paced mocks, or at the end of the window for live rank lists." },
      { title: "Close the loop", body: "Students review every question with the explanation and see how the class answered; faculty use question insights for the next class." },
    ],
    config: [
      ["Assessment type", "Mock (self-paced) or Exam (live window)"],
      ["Sections", "Physics · Chemistry · Maths (or your exam's pattern)"],
      ["Marking", "+4 / −1 per section, numeric questions with exact answers"],
      ["Timing", "180 min overall, auto-submit"],
      ["Order", "Random question order within sections"],
      ["Results", "Release after the window ends"],
    ],
    tips: [
      "Publish the analysis the same day: the value of a mock halves with every day of delay.",
      "Add explanations to every question once; they serve every future batch.",
      "Use reattempts sparingly; the first attempt is the honest data point.",
      "Run a short practice set right after each mock on the chapters the batch got wrong.",
    ],
    audiences: ["coaching-institutes", "edtech-test-publishers"],
    faqs: [
      { q: "Can students retake a mock?", a: "You can grant reattempts per student from the monitoring console, and students can request one." },
      { q: "Can rank be calculated across centres?", a: "Yes. Everyone who takes the same assessment is ranked together with percentile, whether they wrote at home or in a centre." },
      { q: "What's the difference between Mock and Practice?", a: "Mocks have a fixed duration; Practice tests are untimed. Both stay available rather than running in a fixed window." },
    ],
  },
  {
    slug: "scholarship-entrance-tests",
    label: "Scholarship & entrance tests",
    icon: "Megaphone",
    title: "How to Run an Online Scholarship Test or Admission Entrance Test",
    description:
      "Run a scholarship or admission test open to the public: a registration page with your own fields, OTP-verified candidates, reminders by WhatsApp or email, proctoring and a ranked list for your counsellors.",
    h1: "A scholarship test that doubles as your best admissions campaign.",
    lede:
      "Scholarship and entrance tests bring hundreds of motivated students to you. The trick is capturing them properly, making sure they show up, and following up while the result is fresh.",
    hero: "register",
    setup: [
      { title: "Make the test public", body: "Turn on open registration and build the form: name, class, school, city, target exam." },
      { title: "Set two windows", body: "A registration window that runs for weeks, and an exam window on test day." },
      { title: "Automate reminders", body: "Registration confirmation, starting-soon and started messages by WhatsApp, email or push." },
      { title: "Keep it fair", body: "Full screen, tab-switch auto-submit, camera check-in for the scholarship round." },
      { title: "Publish the rank list", body: "Release results with rank and percentile; automations send each student their result." },
      { title: "Hand over to counselling", body: "Export registrants with form fields, score, rank and percentile for your admissions team." },
    ],
    config: [
      ["Assessment type", "Exam, public"],
      ["Registration window", "3 weeks before test day"],
      ["Exam window", "Test day, 10:00–13:00"],
      ["Proctoring", "Camera Basic, record only"],
      ["Results", "Release after the window ends"],
      ["Follow-up", "Export with rank, percentile and form fields"],
    ],
    tips: [
      "Ask for the minimum the counsellor needs: every extra field lowers registrations.",
      "Share the link where your audience already is: school visits, WhatsApp groups, ads.",
      "Follow up within 48 hours of results, while the student is still excited.",
    ],
    audiences: ["coaching-institutes", "schools", "colleges-universities"],
    faqs: [
      { q: "Do candidates need an account?", a: "They register on the public page and verify by OTP, so you get real phone numbers." },
      { q: "Can I charge a fee to register?", a: "Not on the test registration page today; most institutes run scholarship tests free as a lead source." },
      { q: "Can I see who registered but didn't take the test?", a: "Yes, the monitoring console's Pending tab lists them, with reminders and an export." },
    ],
  },
  {
    slug: "school-exams",
    label: "School unit tests & term exams",
    icon: "School",
    title: "How Schools Run Unit Tests and Term Exams with Less Checking",
    description:
      "A school exam workflow on Examezy: AI-generated or imported papers, printed shuffled sets, scanned answer sheets matched to students, on-screen or AI checking, and a report PDF for every student.",
    h1: "Keep the paper exam. Lose the paperwork.",
    lede:
      "Unit tests and term exams stay on paper, as they should. Examezy takes over everything around them: setting the paper, checking the copies and producing the reports.",
    hero: "marking",
    setup: [
      { title: "Set the paper", body: "Generate it from the textbook with chapter weightage, or import last year's paper from Word." },
      { title: "Print sets", body: "Export two or more shuffled sets with roll-number fields and an answer key." },
      { title: "Scan and upload", body: "Scan the copies and bulk upload them; AI matches each copy to the student." },
      { title: "Check", body: "Teachers check on screen, or approve AI-drafted marks on red-pen checked copies." },
      { title: "Release and report", body: "Release results; download every student's report PDF in one ZIP for the PTM." },
    ],
    config: [
      ["Assessment type", "Paper exam with uploaded answer sheets"],
      ["Paper", "Sets A and B, shuffled, answer key"],
      ["Evaluation", "AI checking on, teacher review before release"],
      ["Results", "Released manually after review"],
      ["Reports", "Bulk ZIP, one PDF per student"],
    ],
    tips: [
      "Scan at 200–300 dpi in black and white for the most reliable reading.",
      "Ask students to write name and roll number clearly on the first page: matching depends on it.",
      "Write a model answer for long questions; AI marking follows it closely.",
    ],
    audiences: ["schools"],
    faqs: [
      { q: "Can AI check every subject?", a: "AI checking reads handwriting, including maths, and marks against a rubric per question. Try it on your own copies in the demo; teachers always approve the marks." },
      { q: "What if a copy can't be matched to a student?", a: "It waits for a teacher to pick the student. The AI never guesses." },
      { q: "Can we run online quizzes too?", a: "Yes. Practice tests and homework run online on the same platform." },
    ],
  },
  {
    slug: "university-exams",
    label: "College internals & semester exams",
    icon: "GraduationCap",
    title: "Online Internal Assessments and Semester Exams for Colleges",
    description:
      "Run internal assessments and semester exams with shared question banks, proctored online papers, uploaded answer scripts, evaluator access control and batch-wise result analytics.",
    h1: "Internals and semester exams with an exam cell that can see everything.",
    lede:
      "Colleges need consistency across departments and evidence they can defend. This is how an exam cell runs internals and written semester papers on Examezy.",
    hero: "dashboard",
    setup: [
      { title: "Shared question banks", body: "Faculty add questions tagged by subject, unit and difficulty." },
      { title: "Online internals", body: "Fixed window, section timers, random order, camera proctoring." },
      { title: "Written papers", body: "Students upload answer scripts as PDFs, or the exam cell uploads scans." },
      { title: "Evaluator access", body: "Set who evaluates each paper; evaluators mark on screen with remarks." },
      { title: "Monitor the backlog", body: "The dashboard shows evaluation progress per evaluator and batch." },
      { title: "Publish", body: "Release results with report PDFs; export marks as CSV." },
    ],
    config: [
      ["Assessment type", "Exam (internals) / Paper exam (written)"],
      ["Proctoring", "Camera Basic, auto-submit after 5 flags"],
      ["Sections", "Part A objective, Part B long answer"],
      ["Evaluation", "Assigned evaluators, on-screen marking"],
      ["Exports", "CSV marks, PDF reports"],
    ],
    tips: [
      "Use Part A objective questions so half the paper marks itself.",
      "Use re-evaluation for answer-key corrections instead of editing marks by hand.",
      "Review proctoring timelines only for flagged attempts.",
    ],
    audiences: ["colleges-universities", "training-certification"],
    faqs: [
      { q: "Can evaluators see only their assigned papers?", a: "Evaluator access is set per assessment, by role or named user." },
      { q: "Can marks be exported to our ERP?", a: "Marks export as CSV with your chosen columns." },
      { q: "Is there a pass/fail verdict?", a: "Sections carry cutoff marks; overall pass/fail rules stay with your exam policy." },
    ],
  },
  {
    slug: "campus-hiring-tests",
    label: "Campus & lateral hiring tests",
    icon: "Briefcase",
    title: "How to Run Online Campus Hiring and Lateral Hiring Tests",
    description:
      "A hiring-test setup on Examezy: public registration link, aptitude and coding sections with their own timers, camera proctoring, instant rank lists and snapshot timelines for flagged candidates.",
    h1: "From 2,000 applicants to a 50-person shortlist in an afternoon.",
    lede:
      "A two-section online test, aptitude and coding, filters a campus drive faster and more fairly than any CV screen. Here's the setup.",
    hero: "coding",
    setup: [
      { title: "Registration page", body: "College, degree, year, role. Share one link with every placement cell." },
      { title: "Two sections", body: "Aptitude MCQs (30 min) and coding (60 min), switching locked." },
      { title: "Proctoring", body: "Camera mandatory to start, auto-submit after 5 flags." },
      { title: "Fixed window", body: "Everyone writes in the same window; results released at the end." },
      { title: "Shortlist", body: "Sort by section scores and percentile; export with registration fields." },
      { title: "Check before calling", body: "Open the proctoring timeline of each shortlisted candidate." },
    ],
    config: [
      ["Assessment type", "Exam, public"],
      ["Sections", "Aptitude (MCQ, 30 min) · Coding (2 problems, 60 min)"],
      ["Coding languages", "Python, JavaScript, C, C++, Java, Go"],
      ["Proctoring", "Camera required, auto-submit after 5 flags"],
      ["Results", "Released after window; rank list export"],
    ],
    tips: [
      "Use two medium coding problems rather than one hard one: partial marks separate candidates better.",
      "Lock section switching so aptitude time can't be borrowed for coding.",
      "Generate a fresh coding set per drive with AI to avoid leaked questions.",
    ],
    audiences: ["corporate-hiring", "colleges-universities"],
    faqs: [
      { q: "Can we send different tests to different roles?", a: "Yes. Create one assessment per role, each with its own registration page." },
      { q: "Do candidates need to install anything?", a: "No, everything runs in the browser." },
      { q: "Can we detect copied code?", a: "Not across candidates today; integrity comes from proctoring and shuffled order." },
    ],
  },
  {
    slug: "olympiads-talent-search",
    label: "Olympiads & talent search",
    icon: "Medal",
    title: "How to Conduct an Online Olympiad or Talent Search Exam",
    description:
      "Run an olympiad or talent search exam across schools: open registration with school and class fields, proctored online papers, instant rank and percentile, and result messages to every participant.",
    h1: "An olympiad across a hundred schools, from one dashboard.",
    lede:
      "Olympiads and talent searches need reach, fairness and a credible rank list. Examezy brings registration, the exam, proctoring and results into one flow.",
    hero: "leaderboard",
    setup: [
      { title: "Open registration", body: "Fields for school, class and city; one link to share with every school." },
      { title: "Class-wise papers", body: "One assessment per class group, each with its own registration page." },
      { title: "Fair conditions", body: "Fixed window, random question order, full screen and camera check-in." },
      { title: "Results", body: "Rank and percentile per paper; automations send each participant their result." },
      { title: "School reports", body: "Export results with the school field to send each school its students' ranks." },
    ],
    config: [
      ["Assessment type", "Exam, public, one per class group"],
      ["Questions", "MCQ and numeric, auto-marked"],
      ["Proctoring", "Full screen + camera, record only"],
      ["Results", "Released after the window, rank and percentile"],
    ],
    tips: [
      "Keep papers fully objective so results are instant and indisputable.",
      "Use explanations: participants value learning from the paper as much as the rank.",
    ],
    audiences: ["edtech-test-publishers", "schools", "coaching-institutes"],
    faqs: [
      { q: "Can participants write from home?", a: "Yes, in any modern browser, with proctoring rules you choose." },
      { q: "Can we issue certificates?", a: "Examezy produces ranks and report PDFs; certificates are issued from your own process." },
    ],
  },
  {
    slug: "practice-homework",
    label: "Practice tests & homework",
    icon: "BookOpenCheck",
    title: "Online Practice Tests, Quizzes and Homework for Students",
    description:
      "Untimed practice sets, chapter quizzes and homework with instant feedback, explanations and AI reports, generated from your own material with AI.",
    h1: "Practice that tells students what to practise next.",
    lede:
      "Between big exams, students need short, frequent practice with instant feedback. Practice tests on Examezy are untimed, always open and marked the moment they're done.",
    hero: "types",
    setup: [
      { title: "Generate the set", body: "Create a 15-question chapter set with AI from your notes or knowledge base." },
      { title: "Make it Practice", body: "Untimed and always available; results released on submission." },
      { title: "Add explanations", body: "Students learn from every wrong answer straight away." },
      { title: "Read the reports", body: "The AI report gives each student strengths, misconceptions and a learning path." },
    ],
    config: [
      ["Assessment type", "Practice (untimed)"],
      ["Questions", "10–20 MCQ / numeric / one word"],
      ["Results", "Released on submission"],
      ["Proctoring", "Off"],
    ],
    tips: [
      "Short and frequent beats long and rare for retention.",
      "Use the class diagnostic to plan the next lesson's first 10 minutes.",
    ],
    audiences: ["schools", "coaching-institutes", "edtech-test-publishers"],
    faqs: [
      { q: "Is homework separate from tests?", a: "Homework is its own family in the dashboard, alongside exams, mocks, practice tests and surveys." },
      { q: "Can tests sit inside a course?", a: "Yes, assessments can be embedded as steps in a Vacademy course." },
    ],
  },
  {
    slug: "training-assessments",
    label: "Training & skill assessments",
    icon: "Building2",
    title: "Employee Training Assessments and Skill Tests Online",
    description:
      "Assess employees and trainees after training: sectioned skill tests with cutoffs, proctoring where it matters, and reports per person and per batch.",
    h1: "Know whether the training actually worked.",
    lede:
      "Pre- and post-training tests, skill checks and course-end assessments show what people learned. Examezy makes them quick to set up and easy to read.",
    hero: "insights",
    setup: [
      { title: "Pre-test", body: "A short untimed practice test to baseline the batch." },
      { title: "Post-test", body: "A timed exam with section cutoffs after the programme." },
      { title: "Compare", body: "Question insights show which topics improved and which didn't." },
      { title: "Report", body: "Per-person report PDFs and per-batch statistics for the L&D team." },
    ],
    config: [
      ["Pre-test", "Practice, 15 questions"],
      ["Post-test", "Exam, 40 questions, section cutoffs"],
      ["Proctoring", "Browser rules; camera for certification rounds"],
      ["Reports", "Report PDFs, CSV exports"],
    ],
    tips: [
      "Reuse the same question bank for pre and post tests to measure real change.",
      "Add long-answer scenario questions and let AI draft the marks.",
    ],
    audiences: ["training-certification", "corporate-hiring"],
    faqs: [
      { q: "Can managers see results?", a: "Report access is set per assessment, by role or named user." },
      { q: "Can we brand the portal?", a: "Yes, with Vacademy white-label portals." },
    ],
  },
  {
    slug: "surveys-feedback",
    label: "Surveys & feedback forms",
    icon: "MessageSquareText",
    title: "Student Feedback Surveys and Course Evaluations Online",
    description:
      "Collect course feedback, teacher evaluations and satisfaction surveys with Examezy's survey type: untimed, no right answers, and a report of option percentages and free-text responses.",
    h1: "Feedback surveys in the same place as your exams.",
    lede:
      "Run course feedback and satisfaction surveys with the same batches, reminders and reports you use for exams, instead of a separate forms tool.",
    hero: "insights",
    setup: [
      { title: "Choose Survey", body: "Untimed, no correct answers." },
      { title: "Assign batches", body: "Send to the batches that just finished a course or term." },
      { title: "Remind", body: "Pending tab and reminders for those who haven't answered." },
      { title: "Read the report", body: "Option percentages, free-text answers and per-respondent views." },
    ],
    config: [
      ["Assessment type", "Survey"],
      ["Questions", "MCQ scales and long-answer comments"],
      ["Results", "Survey report"],
    ],
    tips: ["Keep surveys under 10 questions.", "Send right after the course ends, not weeks later."],
    audiences: ["colleges-universities", "training-certification", "schools"],
    faqs: [
      { q: "Are survey responses anonymous?", a: "Surveys are tied to learner accounts so you can see who responded; share results with teachers in aggregate." },
    ],
  },
];

export const findUseCase = (slug: string) => USECASES.find((u) => u.slug === slug);
