import type { Product } from "./types";

/**
 * Platform pages, rendered at /<slug>/ by src/components/ProductPage.tsx.
 * Every claim here must be in docs/PRODUCT_FACTS.md. Order = menu order.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "online-exams",
    label: "Online exams",
    desc: "Timed, sectioned exams that survive a dropped connection.",
    icon: "MonitorCheck",
    title: "Online Exam Software for Institutes and Hiring Teams",
    description:
      "Run timed online exams with sections, per-question timers, negative marking, random question order, auto-submit and live monitoring. Tested with 1,000 simultaneous test-takers.",
    eyebrow: "Online exams",
    h1: "Online exams that feel like the real exam hall.",
    lede:
      "Build the paper once, set the window, and let Examezy run it: timers per test, section or question, a question palette, autosave on every answer and auto-submit when time runs out. You watch it live from one console.",
    hero: "question",
    chips: ["Tested with 1,000 simultaneous test-takers", "Autosave + resume", "Timers per test, section or question", "Auto-submit at time-out"],
    blocks: [
      {
        eyebrow: "Exam screen",
        title: "The interface candidates already know",
        body: [
          "Section tabs, a question palette that shows answered, not answered and marked-for-review, a running timer and a numeric keypad for number answers. It works the way competitive-exam software works, so candidates spend their time on questions, not on the screen.",
          "Optional reading time lets candidates see the paper before the clock starts, the way a paper exam hands out the question booklet a few minutes early.",
        ],
        bullets: ["Mark for review and come back", "Lock or allow switching between sections", "Rich text and images in questions, options and passages"],
        visual: "types",
      },
      {
        eyebrow: "Timing",
        title: "Timers that match how your exam is actually set",
        body: [
          "Give the whole test one duration, give each section its own clock, or time every question separately. Choose whether the test submits itself at time-out or waits for the candidate.",
          "Exams run in a fixed live window. Mock tests stay open with a fixed duration, and practice tests are untimed, so one platform covers the final exam and every rehearsal before it.",
        ],
        visual: "wizard",
      },
      {
        eyebrow: "Reliability",
        title: "A dropped connection does not drop the answers",
        body: [
          "Every answer is saved on the candidate's device and synced to the server as they go. If the network blinks, a banner tells them their answers are safe and will be sent when they are back online. Submission retries on its own, and an interrupted attempt can be resumed.",
          "We load-tested the full exam journey on production with 1,000 candidates writing at the same moment: zero errors, every attempt submitted and graded.",
        ],
        bullets: ["Answers kept on the device until the server confirms", "Automatic retries on submit", "Resume an interrupted attempt"],
        visual: "autosave",
      },
      {
        eyebrow: "Exam-day control",
        title: "Watch the exam live, act in one click",
        body: [
          "The monitoring console splits candidates into Attempted, Ongoing and Pending. Send reminders to those who have not started, close submissions, grant a reattempt, remove a participant or export the list of no-shows.",
        ],
        visual: "console",
      },
    ],
    grid: [
      { icon: "Layers", title: "Sections", body: "Each with its own duration, default marks, negative marking and cutoff." },
      { icon: "Sigma", title: "Negative marking", body: "Set the penalty per section; unattempted questions score zero." },
      { icon: "ListChecks", title: "Random question order", body: "Shuffle questions within a section so neighbours see different orders." },
      { icon: "Timer", title: "Reading time", body: "A timed preview of the paper before the exam clock starts." },
      { icon: "ShieldCheck", title: "Browser restrictions", body: "Full screen, tab-switch warnings, copy and right-click blocked." },
      { icon: "Megaphone", title: "Reminders", body: "Starting-soon and started emails, plus WhatsApp through automations." },
      { icon: "BarChart3", title: "Instant results", body: "Release on submit, at the end of the window, or when you choose." },
      { icon: "Users", title: "Batches or open links", body: "Assign to batches and individuals, or open a public registration page." },
    ],
    faqs: [
      { q: "How many candidates can take an exam at the same time?", a: "We load-tested the full exam journey on our production system with 1,000 candidates writing simultaneously on a 30-question paper: zero errors, and every attempt was submitted and graded. If you expect more than that in a single window, tell us during the demo and we will plan capacity with you." },
      { q: "What happens if a candidate's internet drops mid-exam?", a: "Answers are saved on the device as they are given and synced to the server. The candidate sees a banner saying their answers are safe, submission retries automatically, and an interrupted attempt can be resumed. Starting a test does need a working connection." },
      { q: "Can I time each section separately?", a: "Yes. Duration can be set for the whole test, for each section, or for each question, and you can allow or block switching between sections." },
      { q: "Does the test submit itself when time is up?", a: "If you choose auto-submit, yes. You can also let candidates submit themselves." },
      { q: "Can candidates take the exam on a phone?", a: "Yes, the exam runs in any modern browser on a laptop, tablet or phone. For high-stakes papers we recommend a laptop, since full-screen and tab-switch rules are designed around a desktop browser." },
    ],
    related: ["proctoring", "question-types", "results-analytics"],
  },
  {
    slug: "proctoring",
    label: "AI proctoring",
    desc: "On-device face checks, snapshots and auto-submit rules.",
    icon: "Camera",
    title: "AI Proctoring Software: Camera Checks Without Video Streaming",
    description:
      "Online exam proctoring with forced full screen, tab-switch auto-submit, on-device face detection, snapshot timelines and violation limits you set. No video is streamed.",
    eyebrow: "AI proctoring",
    h1: "Proctoring that catches the obvious, without streaming anyone's bedroom.",
    lede:
      "Every online test is locked to full screen and watches for tab switches. Turn on camera proctoring and Examezy counts faces on the candidate's own device, takes small snapshots, flags what looks wrong and lets you decide what a flag means.",
    hero: "proctor",
    chips: ["Face checks run on the device", "No video streamed", "Auto-submit on the 3rd tab switch", "Snapshot timeline for review"],
    blocks: [
      {
        eyebrow: "Always on",
        title: "Browser rules on every online test",
        body: [
          "The exam opens in full screen. Leaving the tab triggers a warning; the third switch submits the test automatically. Copying, right-click and text selection are blocked, and paste is blocked in typed answers.",
          "None of this needs a plugin or a special browser, so candidates do not get stuck installing software on exam morning.",
        ],
        bullets: ["Forced full screen", "Tab-switch warnings, auto-submit on the 3rd", "Copy, paste, right-click and selection blocked"],
        visual: "question",
      },
      {
        eyebrow: "Camera proctoring",
        title: "A camera check-in, then quiet watching",
        body: [
          "Before starting, the candidate sees a live preview and takes a selfie. You can make the camera mandatory: no camera, no exam.",
          "During the exam a face detector runs on the candidate's device. No face for six seconds, or more than one face for a couple of seconds, raises a flag and takes a snapshot. Small JPEG snapshots are also taken at an interval you choose, from every 10 seconds to every 10 minutes.",
        ],
        bullets: ["Check-in selfie and live preview", "Flags for no face and multiple faces", "Snapshots every 10 s to 10 min, plus one at each flag"],
        visual: "checkin",
      },
      {
        eyebrow: "Your rules",
        title: "You decide what a flag means",
        body: [
          "Pick a violation limit of 3, 5 or 10 flags before the test submits itself, or record only and let a teacher judge afterwards. Lost camera, denied camera, full-screen exits and tab switches all land in the same log.",
          "After the exam, open any attempt to see a timeline of events with the snapshots beside them. Review takes minutes, not hours of video.",
        ],
        visual: "dashboard",
      },
    ],
    grid: [
      { icon: "Wifi", title: "Light on bandwidth", body: "Only small snapshots travel, so it works on ordinary home connections." },
      { icon: "ShieldCheck", title: "Privacy by design", body: "Faces are counted on the device. Nothing is streamed live." },
      { icon: "ClipboardList", title: "Event log", body: "Tab switch, full-screen exit, camera lost, no face, multiple faces, auto-submitted." },
      { icon: "Layers", title: "Per assessment", body: "Off unless you choose it, so practice tests stay friction-free." },
      { icon: "ListChecks", title: "Shuffled orders", body: "Random question order per section; shuffled sets for printed papers." },
      { icon: "Users", title: "Fails safe", body: "If the camera hiccups, it records less. It never blocks an honest candidate." },
    ],
    faqs: [
      { q: "Does Examezy record video of candidates?", a: "No. Faces are detected on the candidate's own device and only small still snapshots are uploaded, at the interval you set and whenever a flag is raised. No video is streamed or stored." },
      { q: "What counts as a violation?", a: "Switching tabs, leaving full screen, the camera being denied or lost, no face in view for about six seconds, or more than one face in view. Each is logged with a timestamp, and camera flags come with a snapshot." },
      { q: "Will the test be auto-submitted for a violation?", a: "Three tab switches always submit an online test. For camera flags you choose: auto-submit after 3, 5 or 10 flags, or never, so a teacher reviews the timeline and decides." },
      { q: "Do candidates need to install anything?", a: "No. Proctoring runs in the browser. Candidates allow camera access when asked, and you can make that mandatory to start." },
      { q: "Is there a lockdown browser or ID verification?", a: "Not today. Examezy's proctoring is the browser rules above plus camera checks. If you need a lockdown browser or live human invigilators for a certification exam, tell us in the demo and we will be straight about whether Examezy fits." },
    ],
    related: ["online-exams", "registration", "results-analytics"],
  },
  {
    slug: "question-types",
    label: "Question types",
    desc: "MCQ, numeric, one word, long answer, coding, passages.",
    icon: "ListChecks",
    title: "Online Exam Question Types: MCQ, Numeric, Coding, Long Answer",
    description:
      "Every question type Examezy supports and how each is marked: single and multiple-correct MCQ, true/false, numeric, one word, long answer, coding and passage-based comprehension questions.",
    eyebrow: "Question types",
    h1: "From one-mark MCQs to code that has to compile.",
    lede:
      "Mix objective questions that mark themselves with long answers your teachers (or AI) check, and coding questions run against hidden test cases. All with rich text, images and explanations.",
    hero: "types",
    chips: ["7 question types", "3 passage-based versions", "Auto-marked objective types", "Explanations shown in review"],
    blocks: [
      {
        eyebrow: "Objective",
        title: "Questions that mark themselves the moment the test ends",
        body: [
          "Single-correct and multiple-correct MCQs, true/false, numeric answers (single digit, integer, positive integer or decimal, with more than one accepted value if you like) and one-word answers that ignore case and extra spaces.",
          "Negative marking is set per section, and results can reach candidates the second they submit.",
        ],
        bullets: ["MCQ single and multiple correct", "True / false", "Numeric with several accepted values", "One word, case-insensitive"],
        visual: "report",
      },
      {
        eyebrow: "Comprehension",
        title: "Passage-based questions, the way board papers set them",
        body: [
          "Write a passage once and hang single-correct, multiple-correct or numeric questions off it. Candidates see the passage beside each question instead of scrolling back.",
        ],
        visual: "question",
      },
      {
        eyebrow: "Subjective",
        title: "Long answers, checked by a teacher or by AI",
        body: [
          "Long-answer questions go to your evaluators. Turn on AI checking and Examezy grades each answer against a rubric and your model answer in seconds, as a draft your teacher approves.",
        ],
        visual: "aiCheck",
      },
      {
        eyebrow: "Coding",
        title: "Code that runs, against tests the candidate can't see",
        body: [
          "Coding questions come with an editor inside the exam. Python and JavaScript run in the browser; C, C++, Java and Go run on a judge server. Marks are proportional to the hidden test cases passed, and scoring is repeated on the server.",
        ],
        visual: "coding",
      },
    ],
    grid: [
      { icon: "ListChecks", title: "MCQ (single correct)", body: "Full marks for the right option, the section's penalty for a wrong one." },
      { icon: "ListChecks", title: "MCQ (multiple correct)", body: "Candidates pick every correct option." },
      { icon: "BadgeCheck", title: "True / false", body: "Quick checks of a concept, auto-marked." },
      { icon: "Sigma", title: "Numeric", body: "Integer, decimal or single-digit answers, several accepted values." },
      { icon: "PenLine", title: "One word", body: "Short typed answers, matched ignoring case and spacing." },
      { icon: "FileStack", title: "Long answer", body: "Teacher-checked, or AI-graded against a rubric." },
      { icon: "Code2", title: "Coding", body: "Six languages, hidden test cases, proportional marks." },
      { icon: "BookOpenCheck", title: "Passage-based", body: "Comprehension versions of MCQ and numeric questions." },
    ],
    faqs: [
      { q: "Which question types are auto-marked?", a: "Single and multiple-correct MCQs, true/false, numeric, one word and coding are marked automatically. Long answers are checked by a teacher, or by AI against a rubric if you turn AI checking on." },
      { q: "Can a numeric question accept more than one answer?", a: "Yes, you can list several accepted values. Answers are matched exactly, so for decimals set the precision you expect in the question." },
      { q: "Can I add images and formulas to questions?", a: "Questions, options, explanations and passages use a rich-text editor with images, so diagrams and figures sit right in the question." },
      { q: "Do you support match-the-following or fill-in-the-blank?", a: "Not as their own types today. Most institutes set these as MCQs or one-word questions. Tell us if they matter for your papers." },
      { q: "Which languages can coding questions use?", a: "Python, JavaScript, C, C++, Java and Go." },
    ],
    related: ["question-bank", "coding-tests", "evaluation"],
  },
  {
    slug: "question-bank",
    label: "Question bank",
    desc: "Every question reusable, tagged and searchable.",
    icon: "Library",
    title: "Question Bank Software: Build, Tag and Reuse Questions",
    description:
      "Keep every question in one searchable bank: filter by type, difficulty, subject and tags, reuse across tests, import from Word, and generate new questions with AI from your own material.",
    eyebrow: "Question bank",
    h1: "Write a good question once. Use it for years.",
    lede:
      "Every question you create, import or generate lands in your institute's question bank, tagged and searchable. Building next month's test becomes picking, not typing.",
    hero: "bank",
    chips: ["Filter by type, difficulty, tags", "Word import", "AI generation from your material", "Source of every question tracked"],
    blocks: [
      {
        eyebrow: "Organise",
        title: "Find the right question in seconds",
        body: [
          "Filter papers by level, subject, tags and date, and individual questions by type, difficulty, tags and where they came from: typed by hand, uploaded, generated by AI or drawn from a knowledge base. Mark favourites, archive the old.",
          "Questions are linked into tests rather than copied, so marks, order and timing belong to each test while the question itself stays clean for the next one.",
        ],
        visual: "wizard",
      },
      {
        eyebrow: "Import",
        title: "Bring your existing papers in from Word",
        body: [
          "Upload a Word document with simple markers for questions, options and answers, and Examezy turns it into a test. Years of past papers become a usable bank in an afternoon.",
          "Have only a printed or scanned paper? The AI extractor digitises it, marking scheme included.",
        ],
        visual: "paper",
      },
      {
        eyebrow: "Generate",
        title: "Fill the gaps with AI, from your own books",
        body: [
          "Generate questions from a PDF, Word file, slides, an image, an audio clip or a topic prompt, then refine the set by chatting with it. Generate from your knowledge base and every question cites the page it came from.",
        ],
        visual: "generator",
      },
    ],
    grid: [
      { icon: "Search", title: "Powerful filters", body: "Type, difficulty, subject, tags, date and source." },
      { icon: "Library", title: "Reuse without copying", body: "One question, many tests, each with its own marks." },
      { icon: "FileStack", title: "Word import", body: "Marker-based import of whole papers." },
      { icon: "ScanLine", title: "Digitise printed papers", body: "Photo or PDF of a paper into editable questions." },
      { icon: "Sparkles", title: "AI generation", body: "From documents, images, audio, topics or your knowledge base." },
      { icon: "BookOpenCheck", title: "Explanations", body: "Add a solution once; candidates see it in their review." },
    ],
    faqs: [
      { q: "Can I import my existing question papers?", a: "Yes. Word documents import with simple markers for questions, options and answers. Printed or scanned papers can be digitised with the AI extractor." },
      { q: "If I edit a question, do old results change?", a: "Questions are linked into tests with their own marks and order. Talk to us about your editing workflow in the demo; we'll show how reuse and versioning work for your team." },
      { q: "Can several teachers share one bank?", a: "Yes. The bank belongs to the institute, and per-test access settings control who can create, edit and evaluate each assessment." },
      { q: "Does AI generation use my own material?", a: "Yes. Generate from your PDFs, Word files, slides or knowledge base. Knowledge-base questions cite the source page so a teacher can check them quickly." },
    ],
    related: ["ai-question-paper-generator", "question-types", "paper-exams"],
  },
  {
    slug: "ai-question-paper-generator",
    label: "AI question paper generator",
    desc: "A full paper from your syllabus in minutes, with sources.",
    icon: "Sparkles",
    title: "AI Question Paper Generator from Your Syllabus and Books",
    description:
      "Generate question papers with AI from your PDFs, notes, slides, images, audio or a topic. Plan by syllabus and weightage, cite the source page of every question, export a print-ready PDF.",
    eyebrow: "AI question paper generator",
    h1: "A balanced question paper, drafted from your own books.",
    lede:
      "Pick the chapters and the weightage. Examezy plans the paper, writes the questions from your material, cites the page each one came from, and hands you a draft to edit, not a black box to trust.",
    hero: "generator",
    chips: ["Up to 120 questions per paper", "Source page cited per question", "Plan by syllabus and weightage", "Print-ready PDF"],
    blocks: [
      {
        eyebrow: "Plan first",
        title: "Weightage you set, not whatever the AI felt like",
        body: [
          "Choose the syllabus, the chapters and how many marks each should carry. Examezy shows the plan before it writes a single question, so the paper is balanced by design.",
          "Mix single and multiple-correct MCQs, true/false, one word, numeric and long answers, plus passage-based and assertion-reason style questions.",
        ],
        visual: "wizard",
      },
      {
        eyebrow: "Any source",
        title: "From whatever you teach with",
        body: [
          "Upload a PDF, Word file or slide deck, a photo of a textbook page, or an audio recording of a lecture, or just type a topic. Generate inside the test wizard to plan a whole test, fill one section, or pick from questions you already have.",
        ],
        bullets: ["PDF, Word and slides", "Images and scanned pages", "Audio, with a target language", "A topic prompt", "Refine by chatting"],
        visual: "bank",
      },
      {
        eyebrow: "Trust, then use",
        title: "Every question shows its source",
        body: [
          "Questions generated from your knowledge base cite the page they came from, so a teacher can verify a question in seconds. Edit anything, then publish online or export a print-ready PDF for a paper exam.",
        ],
        visual: "paper",
      },
    ],
    grid: [
      { icon: "Sparkles", title: "Up to 120 questions", body: "A full-length paper in one go." },
      { icon: "BookOpenCheck", title: "Cited sources", body: "Page references for knowledge-base questions." },
      { icon: "Printer", title: "Print-ready", body: "Download a paper PDF, or run it online." },
      { icon: "Code2", title: "Coding questions too", body: "Generate programming problems with test cases." },
      { icon: "MessageSquareText", title: "Chat to refine", body: "Ask for harder, shorter or more application-based questions." },
      { icon: "Library", title: "Into your bank", body: "Everything generated is saved and tagged for reuse." },
    ],
    faqs: [
      { q: "Is the AI-generated paper ready to use as-is?", a: "Treat it as a strong first draft. Every question is editable, and questions from your knowledge base cite their source page so a teacher can check them quickly before publishing." },
      { q: "What can I generate a paper from?", a: "PDFs, Word files, slides, images or scans, audio recordings, a topic prompt, or your institute's knowledge base." },
      { q: "Can I control difficulty and chapter weightage?", a: "Yes. You plan by syllabus and weightage first, see the plan, then generate." },
      { q: "Can I print the paper?", a: "Yes. Export a print-ready PDF, including multiple shuffled sets and an answer key, for paper exams." },
    ],
    related: ["question-bank", "paper-exams", "question-types"],
  },
  {
    slug: "paper-exams",
    label: "Paper & offline exams",
    desc: "Print shuffled sets, collect sheets, check on screen.",
    icon: "Printer",
    title: "Paper Exam Software: Print, Collect and Check Answer Sheets",
    description:
      "Run pen-and-paper exams with Examezy: print-ready papers in multiple shuffled sets with answer keys, answer sheets uploaded as PDFs, on-screen or AI checking, and results in the same reports as online tests.",
    eyebrow: "Paper & offline exams",
    h1: "Pen and paper on exam day. Everything else, online.",
    lede:
      "Some exams should be written by hand. Examezy prints the paper in shuffled sets, collects the answer sheets as PDFs, lets teachers or AI check them on screen, and puts the results in the same reports as your online tests.",
    hero: "marking",
    chips: ["Multiple shuffled sets", "Answer key PDF", "Upload sheets as PDF", "Same reports as online tests"],
    blocks: [
      {
        eyebrow: "Print",
        title: "Shuffled sets, printed the way your exam hall needs",
        body: [
          "Export the paper as a PDF in as many sets as you need, with questions shuffled between them, plus an answer key. Add header fields such as roll number and invigilator signature, set answer spacing, layout and font.",
        ],
        bullets: ["Multiple sets with shuffled questions", "Optional answer key", "Roll number and signature fields", "Answer spacing and layout controls"],
        visual: "paper",
      },
      {
        eyebrow: "Collect",
        title: "Answer sheets arrive as PDFs, attached to the right student",
        body: [
          "For take-home and remote written tests, candidates download the paper, write on paper and upload one PDF of their answer sheet. For exams in your hall, an admin can upload each sheet on the student's behalf, or bulk-upload a stack of scans and let AI match each copy to its student by name and roll number.",
        ],
        visual: "upload",
      },
      {
        eyebrow: "Check",
        title: "Check on screen with a real pen, or let AI draft the marks",
        body: [
          "Teachers mark the scanned copy with pen, tick, cross, text and shapes, enter marks per question and save a checked PDF the student can see. Or turn on AI checking: Examezy reads the handwriting, marks against a rubric and returns a red-pen checked copy for the teacher to approve.",
        ],
        visual: "aiCheck",
      },
    ],
    grid: [
      { icon: "Printer", title: "Print-ready PDF", body: "Sets, keys and header fields." },
      { icon: "FileStack", title: "PDF answer sheets", body: "Uploaded by the student or by an admin." },
      { icon: "PenLine", title: "On-screen checking", body: "Pen, tick, cross, text, shapes, calculator." },
      { icon: "Sparkles", title: "AI checking", body: "Handwriting read, marked, checked copy returned." },
      { icon: "ClipboardList", title: "Offline result entry", body: "Enter responses or import a ZIP of results (on request)." },
      { icon: "BarChart3", title: "One set of reports", body: "Paper and online results side by side." },
    ],
    faqs: [
      { q: "Does Examezy scan OMR sheets?", a: "No. Examezy handles written answer sheets: printed papers, uploaded PDFs, on-screen checking and AI checking of handwriting. If you run OMR bubble sheets today, keep your scanner and talk to us about bringing the results into Examezy's reports." },
      { q: "How do students submit a paper answer sheet?", a: "For remote written tests they download the paper, write on paper and upload one PDF. For hall exams, an admin uploads the scans, one at a time or in bulk with AI matching each copy to its student." },
      { q: "Can AI check handwritten answers?", a: "Yes. AI checking reads the handwriting, marks each answer against a rubric and returns a red-pen checked copy. Marks stay a draft until a teacher approves and releases them." },
      { q: "Can I enter marks for an exam that was checked by hand?", a: "Yes, offline result entry lets you enter responses per question or import a ZIP of results, graded by the same engine. It is switched on per institute; ask us during setup." },
    ],
    related: ["ai-answer-sheet-checking", "evaluation", "ai-question-paper-generator"],
  },
  {
    slug: "evaluation",
    label: "Evaluation & marking",
    desc: "Auto-marking, on-screen checking and AI, one workflow.",
    icon: "PenLine",
    title: "Online Evaluation System: Auto, On-Screen and AI Marking",
    description:
      "Mark every exam in one place: objective questions auto-marked on submit, teachers checking answer sheets on screen with pen tools, AI drafting marks for handwritten and typed answers, re-evaluation in one click.",
    eyebrow: "Evaluation & marking",
    h1: "Auto-marked, teacher-checked or AI-drafted. Always in your control.",
    lede:
      "Objective questions are marked the moment a candidate submits. Long answers and paper copies go to your evaluators, who check them on screen, or to AI that drafts the marks for a teacher to approve. Nothing reaches a student until you release it.",
    hero: "dashboard",
    chips: ["Instant objective marking", "On-screen marking tools", "AI drafts, teachers approve", "Re-evaluate in one click"],
    blocks: [
      {
        eyebrow: "Automatic",
        title: "Objective marks the second the test ends",
        body: [
          "MCQs, true/false, numeric, one word and coding are marked automatically on submit, with the section's negative marking applied. Results can go out immediately, at the end of the window, or when you release them.",
          "Spotted a wrong answer key? Fix it and re-evaluate the whole test, selected candidates, or just the affected questions.",
        ],
        visual: "report",
      },
      {
        eyebrow: "On-screen marking",
        title: "A red pen, without the stack of paper",
        body: [
          "Evaluators open the answer sheet in the browser and mark it with pen, tick, cross, text, boxes and circles in any colour, with undo and a built-in calculator. Marks are entered per question, kept within each question's maximum, with remarks for the student.",
          "Drafts save as they go. When the evaluator submits, the checked copy is stored and the result released, and the student sees their own marked sheet.",
        ],
        bullets: ["Pen, tick, cross, text, box, circle", "Marks per question with remarks", "Saved drafts", "Checked PDF for the student"],
        visual: "marking",
      },
      {
        eyebrow: "AI checking",
        title: "Let AI do the first pass on long answers",
        body: [
          "Turn on AI checking for a test and Examezy grades typed long answers in about 20 seconds and handwritten copies in a few minutes, against a rubric and your model answer, with feedback per question. Unreadable copies are refused, not guessed.",
          "AI marks are drafts. A teacher reviews each answer, changes any mark and releases. Students see nothing before that.",
        ],
        visual: "aiCheck",
      },
    ],
    grid: [
      { icon: "Users", title: "Evaluator access", body: "Choose who evaluates each test, by role or by name." },
      { icon: "Workflow", title: "Re-evaluation", body: "Whole test, selected candidates or selected questions." },
      { icon: "BarChart3", title: "Evaluation backlog", body: "See what's checked, by whom, and what's waiting." },
      { icon: "MessageSquareText", title: "Remarks", body: "Feedback per question, visible after release." },
      { icon: "ShieldCheck", title: "Result holds", body: "Nothing released until you say so." },
      { icon: "Megaphone", title: "Release alerts", body: "Result emails with the report PDF attached." },
    ],
    faqs: [
      { q: "Can I re-evaluate after fixing an answer key?", a: "Yes. Re-run evaluation for the whole assessment, for selected participants, or for selected questions of selected participants." },
      { q: "Can several teachers evaluate the same test?", a: "Yes. Each assessment's access settings decide who evaluates, by role or by named user." },
      { q: "Will AI publish marks without a teacher?", a: "No. AI marks are drafts. A teacher reviews, edits if needed and releases, and students see nothing before release." },
      { q: "Do students see their checked copy?", a: "Yes, once the result is released they can see their marked answer sheet alongside their report." },
    ],
    related: ["ai-answer-sheet-checking", "results-analytics", "paper-exams"],
  },
  {
    slug: "ai-answer-sheet-checking",
    label: "AI answer-sheet checking",
    desc: "Handwritten copies read, marked and returned in red pen.",
    icon: "ScanLine",
    title: "AI Answer Sheet Checking for Handwritten Exams",
    description:
      "Upload scanned answer sheets and Examezy's AI reads the handwriting, marks each answer against a rubric and returns a red-pen checked copy. Bulk upload 200 copies, students matched by name, teachers approve.",
    eyebrow: "AI answer-sheet checking",
    h1: "Upload the copies tonight. Review the marks tomorrow morning.",
    lede:
      "Examezy's AI reads handwritten answer sheets, marks every answer against one rubric, and returns each student's own copy checked in red pen. Your teachers review and release. Weeks of checking become an hour of reviewing.",
    hero: "aiCheck",
    chips: ["Bulk upload up to 200 PDFs", "Students matched by name & roll no.", "Unreadable copies refused, not charged", "Teacher approves every mark"],
    blocks: [
      {
        eyebrow: "Bulk upload",
        title: "Drop a stack of scans. Each copy finds its student.",
        body: [
          "Upload up to 200 PDFs at once. The AI reads the name and roll number written on each copy and matches it to your class list. It never guesses: anything unclear waits for a teacher to pick the student.",
        ],
        visual: "upload",
      },
      {
        eyebrow: "Marking",
        title: "One rubric, applied to every student the same way",
        body: [
          "A rubric is drafted once per question from your paper and model answer. The AI reads each answer, handles maths lines, marks in half-mark steps and writes short feedback. A copy too faint to read is refused and not charged.",
        ],
        visual: "marking",
      },
      {
        eyebrow: "Teacher review",
        title: "AI drafts. Teachers decide.",
        body: [
          "The teacher gets an alert when checking is done, opens each copy, sees the marks and feedback per question and changes anything. Results release only when the teacher says so, and students then see their red-pen checked copy.",
          "Cost is shown before you run a check, and failed, cancelled or unreadable copies are free.",
        ],
        visual: "dashboard",
      },
    ],
    grid: [
      { icon: "FileStack", title: "200 copies per upload", body: "PDF scans from any scanner or phone app." },
      { icon: "Search", title: "No guessing", body: "Unmatched copies wait for a teacher." },
      { icon: "Sigma", title: "Maths-aware", body: "Equations and working read line by line." },
      { icon: "PenLine", title: "Red-pen copy", body: "Ticks, crosses, notes and the total, on the student's own sheet." },
      { icon: "Timer", title: "Minutes, not weeks", body: "Typically 1–8 minutes per handwritten copy." },
      { icon: "BadgeCheck", title: "Pay per copy", body: "Cost previewed first; failures free." },
    ],
    faqs: [
      { q: "How accurate is AI answer-sheet checking?", a: "It applies one rubric consistently and handles most legible handwriting, including maths. It can misread messy writing, which is why every mark is a draft a teacher reviews before release. We'll check a few of your own copies in the demo so you can judge." },
      { q: "How long does it take?", a: "Typically 1 to 8 minutes per handwritten copy and about 20 seconds for typed long answers. Copies are checked in parallel, so a class is usually done in well under an hour." },
      { q: "What does it cost?", a: "AI checking is paid per copy, based on the number of questions, and the cost is shown before you start. Failed, cancelled and unreadable copies are not charged." },
      { q: "Is this the same as Evalezy?", a: "Yes, it's the same engine. Evalezy (evalezy.com) is our standalone product and API for teams that only want AI copy checking. Inside Examezy it's part of the full exam workflow." },
    ],
    related: ["evaluation", "paper-exams", "results-analytics"],
  },
  {
    slug: "results-analytics",
    label: "Results & analytics",
    desc: "Rank, percentile, question insights, AI reports.",
    icon: "BarChart3",
    title: "Exam Result Analysis Software: Reports, Ranks and Insights",
    description:
      "Instant exam results with rank and percentile, leaderboards, question-wise insights, student report PDFs, bulk report ZIPs, AI class diagnostics and an institute-wide assessment dashboard.",
    eyebrow: "Results & analytics",
    h1: "Results the moment it ends. Insight that lasts till the next exam.",
    lede:
      "Every candidate gets a report with score, rank, percentile and a question-by-question review. You get the leaderboard, the questions that tripped the class, AI diagnostics of misconceptions, and every student's report PDF in one ZIP.",
    hero: "report",
    chips: ["Rank & percentile", "Question insights", "Bulk report ZIP", "AI misconception reports"],
    blocks: [
      {
        eyebrow: "For each student",
        title: "A report card that teaches, not just scores",
        body: [
          "Score, rank and percentile; how they compare with the class average, the topper and the lowest; accuracy and time per section; and a question-wise review with the right answer, the explanation and what percentage of the class picked each option.",
          "The AI report goes further: strengths and weaknesses, misconceptions, a Bloom's taxonomy breakdown, flashcards and a learning path to follow before the next test.",
        ],
        visual: "aiReport",
      },
      {
        eyebrow: "For the teacher",
        title: "See which questions the class got wrong, and why",
        body: [
          "Question insights show correct, incorrect, partially correct and skipped counts for every question, with the fastest correct responders. The AI class diagnostic adds topic accuracy, a thinking-skill profile and the most common misconceptions, ready to print for the next class.",
        ],
        visual: "insights",
      },
      {
        eyebrow: "For the institute",
        title: "Every exam, every batch, one dashboard",
        body: [
          "The assessment dashboard shows what's live now, score distributions, a submission heatmap, the evaluation backlog, statistics per batch and per evaluator, and a list of learners to follow up, with WhatsApp, email and call buttons beside each name.",
        ],
        visual: "dashboard",
      },
      {
        eyebrow: "Hand-outs",
        title: "Every student's report, in one download",
        body: [
          "Export the leaderboard as CSV or PDF, participant lists with your registration fields, or a ZIP with one report PDF per student plus an index, ready for parent-teacher meetings.",
        ],
        visual: "exports",
      },
    ],
    grid: [
      { icon: "Trophy", title: "Leaderboard", body: "Rank, percentile, marks and time; CSV and PDF." },
      { icon: "BarChart3", title: "Overview", body: "Attempted, ongoing, average marks and time." },
      { icon: "FileStack", title: "Bulk report ZIP", body: "One PDF per student, plus an index." },
      { icon: "Sparkles", title: "AI diagnostics", body: "Misconceptions, topic accuracy, thinking skills." },
      { icon: "ClipboardList", title: "Survey reports", body: "Option percentages and free-text answers." },
      { icon: "Megaphone", title: "Result alerts", body: "Release emails with PDF; WhatsApp via automations." },
    ],
    faqs: [
      { q: "Can students see their rank and percentile?", a: "Yes. Each student's report shows score, rank, percentile and comparison with the class average, the highest and the lowest score." },
      { q: "Can I download every student's report at once?", a: "Yes. The bulk export creates a ZIP with one report PDF per student, plus an index file." },
      { q: "Which export formats are supported?", a: "CSV and PDF for leaderboards, participant lists and question insights, and ZIP for bulk report PDFs." },
      { q: "Can parents receive results on WhatsApp?", a: "Result release can trigger WhatsApp, email or push messages through Automations, including rank and percentile. Set the message once and it goes out with every release." },
    ],
    related: ["evaluation", "online-exams", "registration"],
  },
  {
    slug: "registration",
    label: "Open registration tests",
    desc: "Public test pages with your own form and window.",
    icon: "Megaphone",
    title: "Online Test Registration: Public Exam Pages with Custom Forms",
    description:
      "Run scholarship tests, entrance tests and talent searches open to the public: a registration page with your own form fields and registration window, OTP-verified candidates and automated reminders.",
    eyebrow: "Open registration tests",
    h1: "Scholarship tests and entrance exams that fill your funnel.",
    lede:
      "Open a test to anyone with a link. Candidates register on a public page with the fields you ask for, verify their phone by OTP, get reminders, write the test and receive results, and every registration is a lead you can follow up.",
    hero: "register",
    chips: ["Public registration page", "Your own form fields", "Separate registration window", "Reminders and results automated"],
    blocks: [
      {
        eyebrow: "Register",
        title: "A registration page that asks what you need to know",
        bullets: ["Your own form fields", "Registration window, separate from the exam", "OTP-verified phone numbers", "Every field in your exports"],
        body: [
          "Add your own fields (class, city, school, target exam) and set a registration window separate from the exam window. Candidates create an account and verify by OTP, so you get real contact details, not throwaway emails.",
        ],
      },
      {
        eyebrow: "Remind",
        title: "Fewer no-shows, without anyone making calls",
        body: [
          "Automations send messages on registration, before the test starts, when it starts and when results are out, by WhatsApp, email or push. The monitoring console shows who has not started yet, with a reminder button.",
        ],
        visual: "console",
      },
      {
        eyebrow: "Convert",
        title: "Every test-taker is a warm lead",
        body: [
          "Export registrants with your custom fields, rank and percentile, and hand the list to your counsellors. Students who scored well are the easiest admissions conversation you'll have all year.",
        ],
        visual: "exports",
      },
    ],
    grid: [
      { icon: "Megaphone", title: "Public link", body: "Share anywhere: ads, WhatsApp groups, school visits." },
      { icon: "ClipboardList", title: "Custom form", body: "Ask for exactly the details your team needs." },
      { icon: "BadgeCheck", title: "OTP verified", body: "Real phone numbers, not fake sign-ups." },
      { icon: "Timer", title: "Two windows", body: "Registration window and exam window, set separately." },
      { icon: "Workflow", title: "Automations", body: "Registration, reminder, start and result messages." },
      { icon: "Trophy", title: "Rank lists", body: "Leaderboard with percentile, ready for scholarships." },
    ],
    faqs: [
      { q: "Can anyone take an open test without an account?", a: "Candidates register on the public page and create an account with OTP verification. That's what gives you verified contact details for every test-taker." },
      { q: "Can I collect a registration fee?", a: "Not inside the test registration today. Most institutes run free scholarship and talent tests as lead magnets. Ask us if fee collection matters for your exam." },
      { q: "Can I add custom questions to the registration form?", a: "Yes. Add the fields you need, and they appear in participant exports alongside marks, rank and percentile." },
      { q: "Can registrants get reminders on WhatsApp?", a: "Yes, through Automations: registration, starting-soon, started and result messages by WhatsApp, email or push." },
    ],
    related: ["online-exams", "results-analytics", "proctoring"],
  },
  {
    slug: "coding-tests",
    label: "Coding tests",
    desc: "In-exam code editor, hidden test cases, six languages.",
    icon: "Code2",
    title: "Online Coding Test Platform for Hiring and Education",
    description:
      "Run coding assessments with an in-exam code editor, hidden test cases and proportional marks in Python, JavaScript, C, C++, Java and Go, alongside MCQs, with tab-switch rules and camera proctoring.",
    eyebrow: "Coding tests",
    h1: "Coding rounds that grade themselves.",
    lede:
      "Add coding questions to any test. Candidates write and run code inside the exam, marks come from hidden test cases, and the same paper can carry aptitude MCQs and a camera-proctored setting.",
    hero: "coding",
    chips: ["Python, JS, C, C++, Java, Go", "Hidden test cases", "Marks per test case passed", "Mix with MCQs"],
    blocks: [
      {
        eyebrow: "Write & run",
        title: "An editor inside the exam, not a link to another site",
        bullets: ["Python", "JavaScript", "C", "C++", "Java", "Go"],
        body: [
          "Candidates write code in the exam screen and run it against sample cases. Python and JavaScript run right in the browser; C, C++, Java and Go run on a judge server.",
        ],
      },
      {
        eyebrow: "Grade",
        title: "Partial credit that reflects partial solutions",
        body: [
          "Marks are proportional to the hidden test cases passed, so a solution that handles most cases earns most marks. Scores are recomputed on the server against the test cases you wrote.",
        ],
        visual: "report",
      },
      {
        eyebrow: "Whole round",
        title: "Aptitude, coding and proctoring in one test",
        body: [
          "Put an MCQ aptitude section and a coding section in the same paper, each with its own timer. Turn on camera proctoring, and full-screen and tab-switch rules apply throughout. Generate coding problems with AI to grow your bank faster.",
        ],
        visual: "proctor",
      },
    ],
    grid: [
      { icon: "Code2", title: "Six languages", body: "Python, JavaScript, C, C++, Java, Go." },
      { icon: "ListChecks", title: "Hidden test cases", body: "Candidates can't hard-code the answers." },
      { icon: "Sigma", title: "Proportional marks", body: "Per test case passed." },
      { icon: "Sparkles", title: "AI-generated problems", body: "Draft new coding questions fast." },
      { icon: "Camera", title: "Proctored", body: "Camera checks and browser rules." },
      { icon: "Trophy", title: "Rank lists", body: "Shortlist straight from the leaderboard." },
    ],
    faqs: [
      { q: "Which programming languages are supported?", a: "Python, JavaScript, C, C++, Java and Go." },
      { q: "How are coding answers marked?", a: "Against hidden test cases you write. Marks are proportional to the number of test cases passed, and scoring is repeated on the server." },
      { q: "Can I combine coding with aptitude questions?", a: "Yes. A test can have an MCQ section and a coding section, each with its own timer." },
      { q: "Do you detect copied code between candidates?", a: "Not today. Integrity comes from proctoring (camera checks, full-screen and tab-switch rules) and shuffled question order." },
    ],
    related: ["question-types", "proctoring", "registration"],
  },
];

export const findProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
