import type { Faq } from "./types";

/** The /faq/ page, grouped. The home page shows HOME_FAQS. Claims only from docs/PRODUCT_FACTS.md. */
export const FAQ_GROUPS: { title: string; faqs: Faq[] }[] = [
  {
    title: "The platform",
    faqs: [
      { q: "What is Examezy?", a: "Examezy is an online exam and assessment platform for institutes and hiring teams. You create the paper, schedule it, invite or register candidates, proctor it, evaluate it automatically, on screen or with AI, and publish results with reports, all in one place. It's built by the team behind Vacademy." },
      { q: "What kinds of tests can I run?", a: "Live exams in a fixed window, self-paced mock tests with a fixed duration, untimed practice tests, surveys, and paper exams where candidates upload their written answer sheet. Tests can also be embedded inside Vacademy courses." },
      { q: "Which question types are supported?", a: "MCQ with one correct answer, MCQ with multiple correct answers, true/false, numeric, one word, long answer and coding, plus passage-based versions of MCQ and numeric questions. Questions support rich text and images." },
      { q: "Can I import my existing question papers?", a: "Yes. Import Word documents with simple markers, digitise printed or scanned papers with the AI extractor, or generate new questions with AI from your own material." },
      { q: "Does it work on our own domain and brand?", a: "Yes, through Vacademy's white-label portals with your domain, logo and colours." },
    ],
  },
  {
    title: "Exam day",
    faqs: [
      { q: "How many candidates can write at the same time?", a: "We load-tested the full exam journey on production with 1,000 simultaneous test-takers: zero errors, every attempt submitted and graded. If you plan a bigger single-window event, we'll plan capacity with you." },
      { q: "What happens if a candidate's internet drops?", a: "Answers are saved on the device and synced to the server. The candidate sees that their answers are safe, submission retries automatically, and an interrupted attempt can be resumed. Starting the test needs a connection." },
      { q: "Do candidates need to install anything?", a: "No. Examezy runs in any modern browser on a laptop, tablet or phone." },
      { q: "Can I watch the exam live?", a: "Yes. The monitoring console shows who has attempted, who is writing now and who hasn't started, with reminders, reattempts and closing submissions one click away." },
      { q: "Can I give a student a second attempt?", a: "Yes. Grant a reattempt from the monitoring console. Students can also request one, and requests land in an inbox for you to approve." },
    ],
  },
  {
    title: "Proctoring",
    faqs: [
      { q: "How does Examezy stop cheating?", a: "Every online test forces full screen, warns on tab switches and auto-submits on the third, and blocks copy, paste, right-click and text selection. Camera proctoring adds a check-in selfie, face checks on the device, and snapshots at an interval you choose." },
      { q: "Is video recorded?", a: "No. Faces are counted on the candidate's device and only small still snapshots are uploaded. No video is streamed or stored." },
      { q: "Can a candidate be auto-submitted for camera flags?", a: "If you choose. Set a limit of 3, 5 or 10 flags, or record only and let a teacher review the timeline." },
      { q: "Do you have a lockdown browser or ID verification?", a: "Not today. Integrity comes from browser rules and camera checks. We'll tell you honestly in the demo whether that's enough for your exam." },
    ],
  },
  {
    title: "Evaluation & results",
    faqs: [
      { q: "Which answers are marked automatically?", a: "MCQs, true/false, numeric, one word and coding are marked on submit. Long answers and uploaded answer sheets go to teachers, or to AI checking if you turn it on." },
      { q: "How does AI checking work?", a: "AI reads handwritten copies or typed long answers, marks each answer against a rubric and your model answer, and writes feedback. Handwritten copies come back checked in red pen. Marks are drafts until a teacher reviews and releases them." },
      { q: "What does AI checking cost?", a: "It's paid per copy based on the number of questions, with the cost shown before you run it. Failed, cancelled and unreadable copies are free." },
      { q: "Can I fix an answer key after the exam?", a: "Yes. Correct the key and re-evaluate the whole test, selected candidates, or selected questions." },
      { q: "What do students see in their report?", a: "Score, rank, percentile, comparison with the class average and topper, accuracy and time per section, a question-wise review with explanations, how the class answered each question, their checked copy, and an AI report with strengths, misconceptions and a learning path." },
      { q: "Can I export results?", a: "Yes: leaderboards and participant lists as CSV or PDF, question insights as PDF, and a ZIP with one report PDF per student." },
    ],
  },
  {
    title: "Paper exams",
    faqs: [
      { q: "Can I use Examezy for pen-and-paper exams?", a: "Yes. Print the paper in multiple shuffled sets with an answer key, collect answer sheets as PDFs, check them on screen or with AI, and publish results online." },
      { q: "Does Examezy scan OMR sheets?", a: "No. Examezy works with written answer sheets, not OMR bubble sheets." },
      { q: "How are scanned copies matched to students?", a: "Upload up to 200 PDFs at once; AI reads the name and roll number on each copy and matches it to your class list. Anything unclear waits for a teacher." },
    ],
  },
  {
    title: "Buying",
    faqs: [
      { q: "How much does Examezy cost?", a: "Plans are sized to the number of candidates and exams you run, and AI checking is paid per copy. Book a demo and we'll send a quote for your exam calendar." },
      { q: "Can we try it before committing?", a: "Yes. Send us a past paper and we'll set it up as a test, so you can run a pilot exam with one batch." },
      { q: "How long does setup take?", a: "You can run a first test as soon as your questions and candidates are in. We help you import your first paper and set it up during onboarding." },
      { q: "Who is behind Examezy?", a: "Examezy is built by Vidyayatan Technologies, the team behind the Vacademy learning platform." },
    ],
  },
];

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.faqs);

export const HOME_FAQS: Faq[] = [
  FAQ_GROUPS[0].faqs[0],
  FAQ_GROUPS[1].faqs[0],
  FAQ_GROUPS[1].faqs[1],
  FAQ_GROUPS[2].faqs[0],
  FAQ_GROUPS[3].faqs[1],
  FAQ_GROUPS[4].faqs[0],
  FAQ_GROUPS[5].faqs[0],
];
