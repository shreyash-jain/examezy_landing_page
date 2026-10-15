import type { Comparison } from "./types";

/** Honest comparisons at /compare/<slug>/. No named commercial competitors without verified facts about them. */
export const COMPARISONS: Comparison[] = [
  {
    slug: "google-forms",
    label: "Examezy vs Google Forms",
    title: "Examezy vs Google Forms for Online Exams: An Honest Comparison",
    description:
      "Google Forms is great for quick quizzes. Here's where it stops working for real exams (timers, sections, negative marking, proctoring, rank lists, written answers) and where Examezy picks up.",
    h1: "Google Forms is a great form. Your exam deserves an exam platform.",
    lede:
      "Plenty of institutes start their online exams on Google Forms, and for a five-question class quiz it's fine. Here's an honest look at what changes when the exam matters.",
    them: "Google Forms",
    rows: [
      { aspect: "Timer and auto-submit", us: "Per test, section or question; auto-submit at time-out", them: "No built-in timer (add-ons only)" },
      { aspect: "Sections with own marks and negative marking", us: "Yes, per section", them: "Points per question; no negative marking" },
      { aspect: "Question types", us: "MCQ single/multiple, true/false, numeric, one word, long answer, coding, passage-based", them: "Choice, checkbox, short and paragraph text, grids" },
      { aspect: "Integrity", us: "Full screen, tab-switch auto-submit, camera checks with snapshots", them: "Locked mode only on managed Chromebooks" },
      { aspect: "Dropped connection", us: "Answers kept on the device and synced; attempts resumable", them: "Progress is saved only for respondents signed in to Google" },
      { aspect: "Rank and percentile", us: "Automatic, in every student's report", them: "Not available; export to Sheets and build it" },
      { aspect: "Written / handwritten answers", us: "On-screen checking with pen tools, AI checking", them: "Read typed text yourself; file uploads need a Google sign-in" },
      { aspect: "Question bank", us: "Searchable bank, reuse across tests, AI generation", them: "Copy forms or import questions manually" },
      { aspect: "Reports", us: "Student report PDFs, question insights, bulk ZIP, AI diagnostics", them: "Summary charts per question" },
      { aspect: "Price", us: "Paid plans sized to your exams", them: "Free" },
    ],
    whenThem: [
      "Quick, low-stakes class polls and quizzes",
      "You need something in five minutes and results don't need ranks",
      "Every student uses a school-managed Chromebook and you only need locked mode",
    ],
    whenUs: [
      "Exams with timers, sections and negative marking",
      "Results that need rank, percentile and analysis",
      "Proctoring for anything that counts",
      "Written answers that need checking",
      "A question bank you reuse every term",
    ],
    body: [
      { heading: "Where Google Forms works well", text: "Forms is free, everyone knows it, and it's quick for a short check-for-understanding quiz. If that's all you need, keep using it." },
      { heading: "Where it starts to hurt", text: "Real exams need a clock, sections, negative marking and fair conditions, and the result needs to mean something to the student: rank, percentile, which questions to revisit. Forms has none of this built in, so institutes bolt on timers, spreadsheets and manual rank lists, and the work moves to the teacher." },
      { heading: "What changes on Examezy", text: "The exam behaves like the real one, the answers survive a bad connection, proctoring rules apply automatically, objective marks arrive instantly and written answers are checked on screen or by AI. Every student gets a report, and you get the class picture." },
    ],
    faqs: [
      { q: "Can I import my Google Forms quizzes?", a: "Export your questions to a Word document and import them with markers, or paste them and let AI structure the paper." },
      { q: "Is Examezy free like Google Forms?", a: "No. Examezy is a paid platform sized to your exam volume. Book a demo for a quote; we can start with a pilot exam." },
    ],
  },
  {
    slug: "paper-and-spreadsheets",
    label: "Examezy vs paper & spreadsheets",
    title: "Examezy vs Paper Exams and Excel Mark Sheets",
    description:
      "Paper exams and Excel rank lists work, until they don't. Compare setting, checking, rank lists and analysis on paper with the same workflow on Examezy, including paper exams that stay on paper.",
    h1: "Keep what works about paper. Fix everything around it.",
    lede:
      "Paper exams are trusted for good reasons. The pain is everything around them: typing papers, checking stacks of copies, building mark sheets and finding out what went wrong. Here's the comparison.",
    them: "Paper + spreadsheets",
    rows: [
      { aspect: "Setting the paper", us: "Question bank, Word import, AI generation from your books", them: "Typed from scratch in Word" },
      { aspect: "Multiple sets", us: "Shuffled sets and answer key exported automatically", them: "Made by hand, error-prone" },
      { aspect: "Checking copies", us: "On-screen marking with pen tools, or AI-drafted marks", them: "Hours per teacher per exam" },
      { aspect: "Consistency", us: "One rubric per question applied to every copy", them: "Varies by teacher and by hour" },
      { aspect: "Mark sheet and rank list", us: "Automatic, with percentile", them: "Typed into Excel, formulas maintained by hand" },
      { aspect: "Student feedback", us: "Report PDF, checked copy, question-wise review", them: "A number on the copy" },
      { aspect: "Class insight", us: "Question insights and AI class diagnostic", them: "Rarely done" },
    ],
    whenThem: ["Very small classes where checking takes minutes", "No scanner or phone-scanning available"],
    whenUs: ["Copies take more than an evening to check", "You want ranks, reports and insight without Excel", "You run online tests too and want one result history"],
    body: [
      { heading: "Paper doesn't have to go", text: "Examezy is built for paper exams as much as online ones: print the paper in sets, scan the copies, check them on screen or with AI." },
      { heading: "Where the hours go", text: "For most teachers the expensive part isn't the exam; it's the checking and the mark sheet afterwards. That's where Examezy saves the time." },
    ],
    faqs: [
      { q: "Do we need special scanners?", a: "No. Any scanner or phone scanning app that produces PDFs works." },
      { q: "Does Examezy read OMR sheets?", a: "No. Examezy checks written answer sheets; it doesn't scan OMR bubble sheets." },
    ],
  },
  {
    slug: "lms-quizzes",
    label: "Examezy vs LMS quiz tools",
    title: "Examezy vs LMS Quiz Modules (Moodle, Google Classroom) for Exams",
    description:
      "LMS quiz modules handle course quizzes. Compare them with a dedicated exam platform on exam-style interface, proctoring, paper exams, evaluation workflows, rank lists and analytics.",
    h1: "A quiz module tests a course. An exam platform runs your exams.",
    lede:
      "Most learning platforms ship a quiz tool, and for course-level checks it does the job. Exams ask for more: exam-style timing, proctoring, paper copies, evaluators and rank lists.",
    them: "LMS quiz modules",
    rows: [
      { aspect: "Exam-style interface", us: "Sections, palette, mark for review, timers", them: "Varies; usually page-by-page quiz" },
      { aspect: "Proctoring", us: "Built in: full screen, tab-switch, camera checks", them: "Usually via plugins or third parties" },
      { aspect: "Paper exams", us: "Print shuffled sets, upload sheets, check on screen", them: "Typically not supported" },
      { aspect: "AI checking of written answers", us: "Handwritten and typed, teacher-approved", them: "Rare" },
      { aspect: "Rank and percentile", us: "In every report", them: "Rarely built in" },
      { aspect: "Open registration tests", us: "Public page with custom form and OTP", them: "Users must be enrolled" },
    ],
    whenThem: ["Quick checks inside a course", "Your LMS already has the plugins you need"],
    whenUs: ["Exams, mocks and scholarship tests that stand on their own", "Paper and online exams in one result history", "Proctoring and evaluator workflows without plugins"],
    body: [
      { heading: "Use both", text: "Examezy is part of Vacademy, so tests can sit inside courses too. Many institutes keep quick quizzes in the course and run every exam that matters on Examezy." },
    ],
    faqs: [
      { q: "Can Examezy tests sit inside a course?", a: "Yes, on Vacademy assessments can be embedded as course steps." },
      { q: "Does Examezy integrate with Moodle?", a: "Not out of the box. Talk to us about your setup." },
    ],
  },
];

export const findComparison = (slug: string) => COMPARISONS.find((c) => c.slug === slug);
