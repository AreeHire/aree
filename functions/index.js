const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.createExam = functions.https.onRequest(async (request, res) => {
  const body = JSON.parse(request.body);
  const { name, language } = body;
  const snapshot = await admin.firestore().collection("questions").get();
  const questions = [];

  snapshot.forEach((document) => {
     questions.push(document.data());
  });

  const result = {
    name,
    language,
    questions,
  };

  return res.json(result);
});
