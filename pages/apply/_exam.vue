<template>
  <div>
    <ExamHeader> {{ name }}</ExamHeader>
    <ExamWelcome
      v-if="phase === 'welcome'"
      :numberOfQuestions="numberOfQuestions"
      @click="moveToExam"
    />
    <Exam
      v-else-if="phase === 'exam'"
      :questions="questions"
      :answers="answers"
      @answered="handleAnswer"
      @submitExam="submitExam"
    />
    <ExamCompleted v-else :score="score" />
  </div>
</template>

<script>
import Exam from "@/components/Exam.vue";
import ExamWelcome from "@/components/ExamWelcome.vue";
import ExamHeader from "@/components/ExamHeader.vue";
import QuestionCard from "@/components/QuestionCard.vue";
import Timer from "@/components/Timer.vue";

export default {
  layout: "dev",
  components: {
    Exam,
    ExamHeader,
    ExamWelcome,
    QuestionCard,
    Timer
  },
  data() {
    return {
      name: "",
      questions: [],
      answers: {},
      score: 0,
      phase: "welcome"
    };
  },
  computed: {
    numberOfQuestions() {
      return this.questions.length;
    }
  },
  methods: {
    moveToExam() {
      this.phase = "exam";
    },
    handleAnswer(index, value) {
      this.answers[index] = { value };
    },
    async submitExam(email) {
      const result = await this.$axios.post(`/exams/${this.exam}/application`, {
        email,
        answers: this.answers
      });

      this.score = result.data.score;
      this.phase = "thanks";
    }
  },
  async fetch() {
    const exam = await getExam(this.$axios, this.exam);

    this.name = exam.name;
    this.questions = exam.questions;
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
