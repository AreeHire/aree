const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const uuid4 = require("uuid").v4;

const questions = require("./questions");

const getCandidatesModule = require("./candidates");

app.use(cors({ origin: true }));
app.use(express.json());

const admin = require("firebase-admin");
admin.initializeApp();

app.get("/", async (req, res) => {
  const examsSnapshot = await admin.firestore().collection("exam").get();

  const exams = [];
  examsSnapshot.forEach((exam) => {
    const newExam = { id: exam.id, ...exam.data() };
    exams.push(newExam);
  });

  return res.status(200).send(exams);
})

app.get("/:examId", async (req, res) => {
  const { examId } = req.params;

  const exam = await admin.firestore().collection("exam").doc(examId).get();
  return res.status(200).send(exam.data());
});

app.post("/", async (req, res) => {
  const body = req.body;
  const { name, language } = body;

  const exam = {
    name,
    language,
    questions: questions.filter(question => question.tags.indexOf(language) > -1)
  };

  const examId = uuid4();

  try {
    await admin.firestore().collection("exam").doc(examId).set(exam);
  } catch (error) {
    return res.status(500).send({ error: "There was an error creating the exam" });
  }

  return res
    .status(200)
    .type("application/json")
    .send({ id: examId, exam });
});

app.post("/:examId/application", async (req, res) => {
  const { examId } = req.params;
  const { answers, email } = req.body;
  console.warn(email);

  let examRef;
  try {
    examRef = await admin.firestore().collection("exam").doc(examId).get();
  } catch (error) {
    return res.status(404).send({ error: "Exam does not exist" });
  }

  const getScore = () => {
    const exam = examRef.data();
    const numberOfQuestions = exam.questions.length;
    console.log("Start analyzing test");

    const correctAnswers = exam.questions.reduce((acc, question, index) => {
      if (question.type === "text") return acc;

      let correctAnswer;
      if (question.type === "multiple") {
        correctAnswer = question.options.reduce((acc, option, index) => {
          if (option.correct) acc.push(index);
          return acc;
        }, []);
      } else if (question.type === "single") {
        correctAnswer = question.options.findIndex(option => option.correct);
      }

      const currentAnswer = answers[index].value;

      console.warn("Correct Answer", correctAnswer);
      console.warn("Current Answer", currentAnswer);

      if (Array.isArray(correctAnswer)) {
        if (isEqual(correctAnswer, currentAnswer)) {
          return acc + 1;
        }
      } else {
        if (correctAnswer === currentAnswer) {
          console.warn("Answer matched!");
          return acc + 1;
        }
      }

      return acc;
    }, 0);

    return Math.min(100, Math.round((100 / numberOfQuestions) * correctAnswers));
  };

  const applicationId = uuid4();

  try {
    await admin.firestore().collection("candidates").doc(applicationId).set({
      answers,
      examId,
      email,
      submitAt: new Date(),
      score: getScore(),
    });
  } catch(error) {
    return res.status(500).send({ error: error.toString() });
  }

  return res
    .status(200)
    .type("application/json")
    .send({ id: examId, answers, email, score: getScore() });
});

function isEqual(a, b) {
  return a.every((value, index) => value === b[index]);
}

exports.exams = functions.https.onRequest(app);
exports.candidates = functions.https.onRequest(getCandidatesModule(admin));
