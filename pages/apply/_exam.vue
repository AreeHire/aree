<template>
  <div v-if="!$fetchState.pending">
    <ExamHeader> {{ name }}</ExamHeader>
    <ExamWelcome
      v-if="phase === 'welcome' && name"
      :minutes="15"
      :numberOfQuestions="questions.length"
      @click="moveToExam"
    />
    <Exam
      v-else-if="phase === 'exam'"
      :questions="questions"
      :answers="answers"
      @answered="handleAnswer"
    />
    <ExamCompleted v-else :score="score" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Exam from "@/components/Exam.vue";
import ExamCompleted from "@/components/ExamCompleted.vue";
import ExamWelcome from "@/components/ExamWelcome.vue";
import ExamHeader from "@/components/ExamHeader.vue";
import QuestionCard from "@/components/QuestionCard.vue";
import Timer from "@/components/Timer.vue";

export default {
  layout: "dev",
  components: {
    Exam,
    ExamCompleted,
    ExamHeader,
    ExamWelcome,
    QuestionCard,
    Timer
  },
  computed: {
    ...mapState({
      name: state => state.examApplication.name,
      questions: state => state.examApplication.questions,
      answers: state => state.examApplication.answers,
      score: state => state.examApplication.score,
      phase: state => state.examApplication.phase
    })
  },
  methods: {
    ...mapMutations({
      setExam: "examApplication/setExam",
      setAnswer: "examApplication/setAnswer",
      setScore: "examApplication/setScore",
      setPhase: "examApplication/setPhase"
    }),
    moveToExam() {
      this.setPhase("exam");
    },
    handleAnswer(index, value) {
      this.setAnswer({ index, value });
    },
    async submitExam(email) {
      const result = await this.$axios.post(`/exams/${this.exam}/application`, {
        email,
        answers: this.answers
      });

      this.setScore(result.data.score);
      this.setPhase("thanks");
    }
  },
  async fetch() {
    const exam = await getExam(this.$axios, this.exam);

    this.setExam(Object.assign({}, exam, { id: this.exam }));
  },
  asyncData({ params }) {
    return { exam: params.exam };
  }
};

async function getExam(axios, examId) {
  const response = await axios.get(`/exams/${examId}`);
  return response.data;
}
</script>
