const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const uuid4 = require("uuid").v4;

const questions = require("./questions");

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

  let examSnapshot;

  try {
    examSnapshot = await admin.firestore().collection("exam").doc(uuid4()).set(exam);
  } catch (error) {
    return res.status(500).send({ error: "There was an error creating the exam" });
  }

  return res
    .status(200)
    .type("application/json")
    .send(exam);
});

exports.exams = functions.https.onRequest(app);
