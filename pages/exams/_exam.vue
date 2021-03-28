<template>
  <div>
    <p class="text-xl mb-4">Questions</p>
    <template v-for="(question, index) in questions">
      <question-card
        class="mb-4"
        :question-number="index + 1"
        :key="question.name"
        :question="question"
        :type="question.type"
      />
    </template>
    <button
      v-if="questions"
      class="bg-cyan-300 w-28 h-12 text-center self-center rounded-md"
    >
      Submit ALV
    </button>
  </div>
</template>

<script>
import axios from "axios";
import QuestionCard from "@/components/QuestionCard.vue";

export default {
  components: {
    QuestionCard
  },
  data() {
    return {
      questions: []
    };
  },
  async fetch() {
    this.questions = await getExams(this.$fire.firestore, this.exam);
  },
  async asyncData({ params }) {
    return { exam: params.exam };
  }
};

async function getExams(firestore, examId) {
  const url = `http://localhost:5001/hire-latam/us-central1/exams/${examId}`;

  const response = await axios.get(url);
  return response.data.questions;
}
</script>
