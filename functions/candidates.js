const express = require("express");
const cors = require("cors");

const getModule = (admin) => {
  const app = express();

  app.use(cors({ origin: true }));
  app.use(express.json());

  app.get("/", async (req, res) => {
    const candidatesRef = await admin.firestore().collection("candidates").get();

    const candidates = [];
    candidatesRef.forEach(candidate => {
      candidates.push({ id: candidate.id, ...candidate.data() });
    });

    await Promise.all(candidates.map(async (candidate) => {
      const exam = await admin.firestore().collection("exam").doc(candidate.examId).get();
      candidate.exam = exam.data().name;
    }));

    return res
      .status(200)
      .type("application/json")
      .send(candidates);
  });

  return app;
};

module.exports = getModule;
