const getScore = require("./scoring");
const questions = require("./fixtures/test_questions");

const testExam = { questions };

const answers = {
  "0": { value: [0, 2, 3] },
  "1": { value: 2 },
  "2": { value: 0 },
  "3": { value: [1] },
  "4": { value: 0 },
  "5": { value: [2, 3, 4] },
  "6": { value: 0 },
  "7": { value: 0 },
  "8": { value: 0 }
};

describe("Get Score", () => {
  test("get the score for a given exam", () => {
    const score = getScore(testExam, answers);
    expect(score).toEqual(89);
  });

  test("allow empty answers for specific questions", () => {
    const score = getScore(testExam, { "0": { value: [0, 2, 3] } });
    expect(score).toEqual(11);
  });

  test("Get 30% of score when partially correct in multiple option questions", () => {
    const exam = {
      questions: [
        {
          name: "What is love?",
          type: "multiple",
          options: [
            {
              value: "Baby don't hurt me",
              correct: true
            },
            {
              value: "Don't hurt me",
              correct: true
            },
            {
              value: "No more",
              correct: false
            }
          ]
        }
      ]
    };
    const testAnswers = {
      "0": { value: [0] }
    };
    const score = getScore(exam, testAnswers);
    expect(score).toEqual(30);
  });
});
