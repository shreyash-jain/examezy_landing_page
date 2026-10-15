# Examezy: product facts (the only claims the site may make)

Examezy = the exams & assessments product of the Vacademy platform (assessment_service + admin dashboard + learner
app), sold under its own brand at examezy.com. Built 15 Oct 2026 from a code-verified inventory of
`vacademy_platform` (main). **Change the product, change this file first, then the copy.**

AI checking of handwritten copies is ALSO sold standalone as **Evalezy** (evalezy.com, with an API). On Examezy it is
one part of the evaluation story; link to evalezy.com for the standalone product and API.

## Lifecycle (verified)

Create (4-step wizard: basic info → sections & questions → participants & notifications → access control; stays
DRAFT until published) → schedule (live window + separate registration window) → invite (batches / individuals) or
open registration (public link + custom form) → attempt → evaluate (auto / teacher / AI) → release results →
analyse.

## Assessment types

- **Exam**: fixed live window, timed.
- **Mock**: always available, fixed duration, reattempts.
- **Practice**: always available, untimed.
- **Survey**: untimed, no correct answers, own survey report.
- **Paper exam with uploaded answer sheet** (`MANUAL_UPLOAD_EXAM`): learner downloads the paper, writes on paper,
  uploads one PDF.
- Homework is a separate family; tests can also be embedded inside courses.

## Settings we may name

- Duration per assessment, per section or per question. Optional timed preview (reading time) before start.
- Auto-submit when time runs out (or learner submits).
- Sections with their own duration, default marks, per-question marks, negative marking, cutoff marks, random
  question order. Allow / block switching between sections.
- Result release: right after submission, after the exam ends, or manually.
- Reattempts can be granted per learner from the monitoring console; learners can request a reattempt (inbox).
- Public or private assessment.
- "Evaluate with AI" toggle per assessment.

## Question types (authorable today)

MCQ single correct · MCQ multiple correct · True/False · Numeric (single digit, integer, positive integer, decimal;
exact match against one or more accepted values) · One word (case- and space-insensitive) · Long answer (teacher, or
AI against a rubric + model answer) · Coding · and passage-based (comprehension) versions of MCQ single, MCQ multiple
and Numeric. Rich text with images in questions, options, explanations and passages.

Coding: in-exam editor; Python and JavaScript run in the browser; C, C++, Java, Go run on Judge0; marks proportional
to hidden test cases passed; re-scored on the server.

## Proctoring & integrity (verified, live)

- Every online timed test: forced full screen, tab-switch detection with warnings, **auto-submit on the 3rd tab
  switch**, copy / right-click / text selection blocked, paste blocked in typed answers.
- **Camera proctoring (Basic tier)**, per assessment, off unless chosen: camera check-in with selfie, optional
  "camera required to start", face counting **on the learner's device** (no face 6 s / more than one face 2.5 s =
  flag), small JPEG snapshots at an interval the admin sets (10–600 s) plus one at each flag, **no video streamed**,
  events logged (tab switch, full-screen exit, camera denied/lost, no face, multiple faces, auto-submitted), violation
  limit of 3 / 5 / 10 flags or "record only, teacher decides", admin review timeline with snapshots.
- Random question order per section; multiple shuffled sets for printed papers.

## Online / offline

- Runs in the browser (laptop, tablet, phone). Vacademy also ships branded learner apps; don't promise app exams
  specifically.
- Answers autosave on the device and sync to the server; submit retries; a dropped connection does not lose
  answers; interrupted attempts can be resumed. **Starting a test needs a connection.**
- Paper exams: print-ready PDF export with multiple shuffled sets, optional answer key, header fields (roll number,
  invigilator signature), answer spacing and layout settings. Learners (or an admin on their behalf) upload the
  written answer sheet as a PDF.
- Offline result entry (enter responses or bulk ZIP + CSV, graded by the same engine): exists but is switched on per
  institute ("on request").

## Evaluation

- **Automatic** for objective types and coding, on submit. Admin can re-evaluate the whole test, selected
  participants, or selected questions for selected participants.
- **Teacher (on-screen) checking**: answer-sheet PDF with pen, tick, cross, text, box, circle, colours, undo,
  calculator; marks per question (kept within max) with remarks; drafts saved; the checked PDF is saved and the
  result released. Evaluator access is set per assessment (role or named people).
- **AI checking**: handwritten copies (scanned PDF) and typed long answers. Rubric per question; reads handwriting;
  refuses unreadable copies (not charged); maths handled; marks in 0.5 steps with feedback; returns a red-pen checked
  PDF. Typically 1–8 min per handwritten copy, ~20 s for typed answers. Bulk upload up to 200 PDFs, name/roll-number
  matching that never guesses. **AI marks are drafts: teacher reviews, edits, releases; learners see nothing
  before release.** Priced per copy (credits per question), cost shown before running; failed/cancelled/unreadable
  copies free. Don't publish a rupee figure on examezy.com.

## Results & analytics

- Admin: overview (participants, attempted, ongoing, average time, average marks, marks/rank/percentile), leaderboard
  (CSV, PDF), question insights (correct / incorrect / partial / skipped per question; PDF), individual student report
  PDF, participant exports (CSV/PDF, custom registration fields), **bulk report ZIP (one PDF per student)**, AI class
  diagnostic (topic accuracy, cognitive profile, common misconceptions), survey report, institute assessment
  dashboard (live now, KPIs, score distribution, submission heatmap, evaluation backlog, per-batch and per-evaluator
  stats, learners to follow up with WhatsApp/email/phone actions).
- Learner: score, rank, percentile, comparison with class average / highest / lowest, accuracy & time breakdown,
  section comparison, what % of the class chose each option, question-wise review with answer and explanation, the
  checked copy, PDF download, AI report (strengths, weaknesses, misconceptions, Bloom's levels, flashcards, learning
  path, time-management insights).
- Exports: CSV, PDF, ZIP. **No Excel.**

## Question bank & paper creation

- Reusable question bank; filter by type, difficulty, tags, subject, source; favourites and archive.
- Word (DOCX) import with markers.
- AI tools: generate from PDF/DOC/PPT, digitise a printed or scanned paper, from an image, from audio, from a topic
  prompt, refine by chat. Knowledge-base generation inside the wizard (plan a whole test, fill a section) with the
  source page cited per question; up to 120 questions per paper; syllabus + weightage planning; print-ready PDF.
- AI coding-question generation.

## Participants, monitoring, automation

- Closed tests: by batch or individual. Open tests: public registration page with a custom form and registration
  window; registrants create an account and verify by OTP (no guest attempts).
- Monitoring console: Attempted / Ongoing / Pending, close submissions, grant reattempts, remove participants, send
  reminders, release results, export non-attempters.
- Access control per assessment: who edits, who gets live alerts, who sees reports, who evaluates.
- Automations (WhatsApp / email / push via workflows) on: created, published, starting soon, started, ended,
  registration, result released (with rank and percentile), reattempt requested/granted, AI evaluation completed.
- Built-in emails: starting soon / started, result released (with PDF).
- White-label: your domain, your brand (Vacademy white-label portals).

## Scale

- Production load test, 27 Aug 2026: **1,000 simultaneous test-takers** on a 30-question paper, full journey, 0
  errors, p95 ≤ 146 ms per step, all 1,000 submitted and graded. Say "tested with 1,000 simultaneous
  test-takers", never "supports unlimited" or "1,000+".
- PDF answer-sheet upload journey also tested with 1,000 simultaneous learners (28 Aug 2026); files go straight to
  storage.

## Customers

Vacademy's 25 client logos may appear only as "the team behind Vacademy, used by …"; they are not confirmed Examezy
users.

## NEVER claim (not built, or broken)

- OMR sheets / OMR scanning / bubble-sheet reading.
- Match the following, fill in the blanks, matrix match, assertion-reason as its own type, audio/video answers,
  per-question file upload.
- Numeric range / tolerance answers.
- **Partial marking** for multiple-correct MCQs (a bug discounts it twice) and **negative marking for numeric**
  questions (scaled down by a bug). Say "negative marking" only generically; do not advertise partial marking for MCQ
  until fixed.
- Adding extra time to a live attempt (the dialog is a placeholder; approving a time request adds no time).
- Enforced reattempt limits.
- Pass/fail verdicts, certificates on passing.
- Paid tests / collecting exam fees.
- DOCX paper export, Excel reports.
- Lockdown / safe exam browser, ID verification against a photo, live human proctors, screen recording, video
  recording, phone/object detection, gaze tracking, IP/device restriction, plagiarism detection across candidates.
- PRO / ULTRA proctoring (UI says "coming soon").
- Multilingual question papers; "15 languages". The learner interface has English, Hindi and French (Arabic exists
  without right-to-left layout; don't list it).
- Screenshot blocking on mobile; parent notifications from the assessment settings.
- Per-copy assignment of answer sheets to specific evaluators.
- Psychometric tests, test libraries, adaptive testing, test centres, CBT centres.
- Certifications (ISO, SOC 2), data residency, uptime SLAs.
