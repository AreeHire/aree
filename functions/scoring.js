function getScore(exam, answers) {
  const numberOfQuestions = exam.questions.length;
  const correctAnswers = exam.questions.reduce(evaluateQuestion(answers), 0);

  return Math.min(100, Math.round((100 / numberOfQuestions) * correctAnswers));
}

function evaluateQuestion(answers) {
  return function(acc, question, index) {
    const correctAnswer = getCorrectAnswer(question);
    const currentAnswer = answers[index] && answers[index].value;

    if (
      isMultipleChoiceQuestion(correctAnswer) &&
      isEqual(correctAnswer, currentAnswer)
    ) {
      return acc + 1;
    }
    if (correctAnswer === currentAnswer) return acc + 1;

    return acc;
  };
}

function getCorrectAnswer(question) {
  if (question.type === "text") return acc;
  if (question.type === "single")
    return question.options.findIndex(option => option.correct);

  if (question.type === "multiple") {
    return question.options.reduce((acc, option, index) => {
      if (option.correct) acc.push(index);
      return acc;
    }, []);
  }
}

function isMultipleChoiceQuestion(correctAnswer) {
  return Array.isArray(correctAnswer);
}

function isEqual(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.every((value, index) => value === b[index])
  );
}

module.exports = getScore;
