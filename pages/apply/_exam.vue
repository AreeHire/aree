<template>
  <div>
    <header
      class="w-full text-center text-xl pb-1 mb-4 border-b border-black-500"
    >
      {{ name }}
    </header>
    <ExamWelcome
      :numberOfQuestions="numberOfQuestions"
      v-if="phase === 'welcome'"
      @click="moveToExam"
    />
    <ExamCompleted v-else-if="phase === 'thanks'" :score="score" />
    <Exam
      v-else
      :questions="questions"
      :answers="answers"
      @answered="handleAnswer"
      @submitExam="submitExam"
    />
  </div>
</template>

<script>
import ExamWelcome from "@/components/ExamWelcome.vue";
import QuestionCard from "@/components/QuestionCard.vue";
import Timer from "@/components/Timer.vue";

export default {
  layout: "dev",
  components: {
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
