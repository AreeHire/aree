const express = require("express");
const cors = require("cors");

const authenticationMiddleware = require("./authentication");
const questions = require("./questions");

const getModule = admin => {
  const app = express();

  app.use(cors({ origin: true }));
  app.use(express.json());
  app.use(authenticationMiddleware(admin));

  app.get("/", async (req, res) => {
    const tag = req.query.tag;

    return res
      .status(200)
      .type("application/json")
      .send(questions.filter(question => question.tags.indexOf(tag) > -1)
      );
  });

  return app;
};

module.exports = getModule;
