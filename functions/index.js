require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const uuid4 = require("uuid").v4;

const getScore = require("./scoring");
const getMailer = require("./mailing");

const questions = require("./questions");

const getCandidatesModule = require("./candidates");

app.use(cors({ origin: true }));
app.use(express.json());

const admin = require("firebase-admin");
admin.initializeApp();

app.get("/", async (req, res) => {
  const examsSnapshot = await admin
    .firestore()
    .collection("exam")
    .where("userId", "==", req.query.userId)
    .get();

  const exams = [];
  examsSnapshot.forEach(exam => {
    const newExam = { id: exam.id, ...exam.data() };
    exams.push(newExam);
  });

  return res.status(200).send(exams);
});

app.get("/:examId", async (req, res) => {
  const { examId } = req.params;

  const exam = await admin
    .firestore()
    .collection("exam")
    .doc(examId)
    .get();
  return res.status(200).send(exam.data());
});

app.post("/", async (req, res) => {
  const body = req.body;
  const { name, userId, language, email } = body;

  const exam = {
    name,
    userId,
    language,
    email,
    questions: questions.filter(
      question => question.tags.indexOf(language) > -1
    ),
    createdAt: new Date()
  };

  const examId = uuid4();

  try {
    await admin
      .firestore()
      .collection("exam")
      .doc(examId)
      .set(exam);
  } catch (error) {
    return res
      .status(500)
      .send({ error: "There was an error creating the exam" });
  }

  return res
    .status(200)
    .type("application/json")
    .send({ id: examId, exam });
});

app.post("/:examId/application", async (req, res) => {
  const { examId } = req.params;
  const { name, answers, email } = req.body;
  const mailer = getMailer();

  let examRef;
  try {
    examRef = await admin
      .firestore()
      .collection("exam")
      .doc(examId)
      .get();
  } catch (error) {
    return res.status(404).send({ error: "Exam does not exist" });
  }

  functions.logger.log(
    "Start analyzing test for ${email} doing the exam ${exam.name}"
  );
  const score = getScore(examRef.data(), answers);

  const applicationId = uuid4();
  try {
    await admin
      .firestore()
      .collection("candidates")
      .doc(applicationId)
      .set({ name, answers, examId, email, score, createdAt: new Date() });

    await mailer.send({
      to: [email, examRef.data().email],
      position: examRef.data().name,
      username: name,
      email,
      score
    });
  } catch (error) {
    return res.status(500).send({ error: error.toString() });
  }

  return res
    .status(200)
    .type("application/json")
    .send({ id: examId, answers, email, score });
});

exports.exams = functions.https.onRequest(app);
exports.candidates = functions.https.onRequest(getCandidatesModule(admin));
