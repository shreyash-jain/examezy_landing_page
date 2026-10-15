/**
 * /glossary/: plain-English exam terms. Each entry gets an anchor (#slug) and DefinedTerm schema.
 * `link` points to the Examezy page where the idea is put to work.
 */
export interface Term {
  term: string;
  def: string;
  link?: { href: string; label: string };
}

export const TERMS: Term[] = [
  { term: "Answer key", def: "The list of correct answers for objective questions, used to mark them. A wrong key is fixed by correcting it and re-evaluating.", link: { href: "/evaluation/", label: "Re-evaluation" } },
  { term: "Answer sheet", def: "The paper on which a candidate writes answers in a written exam; in online marking it is scanned into a PDF.", link: { href: "/paper-exams/", label: "Paper exams" } },
  { term: "Assertion-reason question", def: "A question pairing a statement with a reason; the candidate chooses whether each is true and whether the reason explains the assertion. Usually set as a single-correct MCQ." },
  { term: "Auto-submit", def: "Submitting a test automatically when time runs out or after a set number of integrity violations.", link: { href: "/online-exams/", label: "Online exams" } },
  { term: "Bloom's taxonomy", def: "A ladder of thinking skills (remember, understand, apply, analyse, evaluate, create) used to balance a paper beyond recall.", link: { href: "/results-analytics/", label: "AI reports" } },
  { term: "Blueprint", def: "A table that fixes marks per unit, question type and difficulty before questions are written.", link: { href: "/blog/question-paper-blueprint/", label: "Blueprint guide" } },
  { term: "Comprehension (passage-based) question", def: "Questions that refer to a shared passage, data set or case study shown alongside them.", link: { href: "/question-types/", label: "Question types" } },
  { term: "Computer-based test (CBT)", def: "An exam taken on a computer rather than on paper, usually in a supervised centre." },
  { term: "Cutoff", def: "The minimum marks needed to qualify, set for a whole test or for each section." },
  { term: "Diagnostic test", def: "A test designed to find gaps in understanding rather than to rank, usually given before teaching." },
  { term: "Evaluator", def: "The person who checks and marks subjective answers. Access to evaluate is usually controlled per exam." },
  { term: "Formative assessment", def: "Frequent, low-stakes checks during learning, such as quizzes and practice tests, used to guide teaching." },
  { term: "Hidden test cases", def: "Inputs used to mark a coding answer that the candidate cannot see, so solutions can't be hard-coded.", link: { href: "/coding-tests/", label: "Coding tests" } },
  { term: "Item analysis", def: "Studying each question's results (how many got it right, which wrong options were chosen) to judge its quality and the class's understanding.", link: { href: "/results-analytics/", label: "Question insights" } },
  { term: "Leaderboard", def: "A ranked list of candidates by marks, often with time taken and percentile." },
  { term: "Live window", def: "The fixed period in which a scheduled exam can be started and written." },
  { term: "Marking scheme", def: "The rules for awarding marks: points expected per answer, step marks and penalties." },
  { term: "Mark for review", def: "A flag a candidate puts on a question to return to it before submitting." },
  { term: "MCQ (multiple choice question)", def: "A question with options from which the candidate picks one (single correct) or several (multiple correct) answers." },
  { term: "Mock test", def: "A full-length rehearsal of a real exam with the same pattern, timing and marking.", link: { href: "/use-cases/mock-test-series/", label: "Mock test series" } },
  { term: "Model answer", def: "A teacher's ideal answer to a subjective question, used to guide marking." },
  { term: "Negative marking", def: "Deducting marks for wrong answers to discourage guessing.", link: { href: "/blog/negative-marking-explained/", label: "Negative marking explained" } },
  { term: "Numeric answer type", def: "A question answered by typing a number instead of choosing an option." },
  { term: "OMR (optical mark recognition)", def: "Reading filled bubbles on printed answer sheets with a scanner. Different from checking written answers on screen." },
  { term: "On-screen marking (OSM)", def: "Checking scanned answer sheets on a computer instead of on paper.", link: { href: "/evaluation/", label: "On-screen checking" } },
  { term: "Open registration test", def: "A test anyone can register for through a public link, often used for scholarships and admissions.", link: { href: "/registration/", label: "Open registration" } },
  { term: "Percentile", def: "The percentage of test-takers who scored at or below a given candidate.", link: { href: "/blog/rank-vs-percentile/", label: "Rank vs percentile" } },
  { term: "Practice test", def: "An untimed, always-open test meant for learning rather than ranking." },
  { term: "Proctoring", def: "Supervising an exam to keep it fair, in person or remotely through browser rules and camera checks.", link: { href: "/proctoring/", label: "AI proctoring" } },
  { term: "Question bank", def: "A searchable store of questions, tagged by topic, type and difficulty, used to build papers.", link: { href: "/question-bank/", label: "Question bank" } },
  { term: "Question palette", def: "The grid of question numbers on an exam screen showing which are answered, unanswered or marked for review." },
  { term: "Randomisation", def: "Shuffling question order (or printing different sets) so neighbouring candidates see different papers." },
  { term: "Re-evaluation", def: "Marking answers again, for example after a corrected answer key or a candidate's request." },
  { term: "Reading time", def: "A short timed preview of the paper before the exam clock starts." },
  { term: "Remote proctoring", def: "Proctoring candidates who write from home, using their own device's browser and camera." },
  { term: "Rubric", def: "A breakdown of what earns marks in a subjective answer, criterion by criterion.", link: { href: "/ai-answer-sheet-checking/", label: "AI checking" } },
  { term: "Section", def: "A part of a paper with its own questions and, often, its own timer, marks and cutoff." },
  { term: "Summative assessment", def: "A test at the end of a unit, term or course that measures what was learned, such as a term exam." },
  { term: "Tab switching", def: "Leaving the exam tab for another tab or app, which proctoring tools detect and limit." },
  { term: "Test series", def: "A planned sequence of tests, usually chapter tests building to full mocks, before a competitive exam." },
];

export const termId = (t: string) => t.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
