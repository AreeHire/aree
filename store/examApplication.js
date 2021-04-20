export const state = () => ({
  examId: "",
  name: "",
  questions: [],
  answers: {},
  score: 0,
  phase: "welcome"
});

export const mutations = {
  setExam(state, exam) {
    state.examId = exam.id;
    state.name = exam.name;
    state.questions = exam.questions;
  },
  setAnswer(state, { index, value }) {
    state.answers[index] = { value };
  },
  setPhase(state, phase) {
    state.phase = phase;
  },
  setScore(state, score) {
    state.score = score;
  }
};
