function getScore(exam, answers) {
  const numberOfQuestions = exam.questions.length;
  const correctAnswers = exam.questions.reduce(evaluateQuestion(answers), 0);

  return Math.min(100, Math.round((100 / numberOfQuestions) * correctAnswers));
}

function evaluateQuestion(answers) {
  return function(acc, question, index) {
    const correctAnswer = getCorrectAnswer(question, acc);
    const currentAnswer = answers[index] && answers[index].value;

    if (currentAnswer === undefined) return acc;
    if (
      isMultipleChoiceQuestion(question) &&
      isCorrect(correctAnswer, currentAnswer)
    ) {
      return acc + 1;
    }
    if (
      isMultipleChoiceQuestion(question) &&
      isPartiallyCorrect(correctAnswer, currentAnswer)
    ) {
      return acc + 0.3;
    }
    if (correctAnswer === currentAnswer) return acc + 1;

    return acc;
  };
}

function getCorrectAnswer(question, acc) {
  if (question.type === "text") return acc;
  if (question.type === "single") {
    return question.options.findIndex(option => option.correct);
  }
  if (question.type === "multiple") {
    return question.options.reduce((acc, option, index) => {
      if (option.correct) acc.push(index);
      return acc;
    }, []);
  }
}

function isMultipleChoiceQuestion(question) {
  return question.type === "multiple";
}

function isCorrect(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.every((value, index) => value === b[index])
  );
}

function isPartiallyCorrect(correctAnswer, currentAnswer) {
  return currentAnswer.some(
    answeredOption => correctAnswer.indexOf(answeredOption) > -1
  );
}

module.exports = getScore;
