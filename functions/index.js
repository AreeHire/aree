const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const admin = require("firebase-admin");
admin.initializeApp();

app.post("/", async (req, res) => {
  const body = req.body;
  const { name, language } = body;
  const snapshot = await admin.firestore().collection("questions").where("language", "==", language).get();
  const questions = [];

  snapshot.forEach((document) => {
     questions.push(document.data());
  });

  const exam = {
    name,
    language,
    questions,
  };

  const examSnapshot = await admin.firestore().collection("exam").doc("EXAM").set(exam);

  return res
    .status(200)
    .type("application/json")
    .send(exam);
});

exports.exams = functions.https.onRequest(app);
