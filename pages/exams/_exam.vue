<template>
  <div>
    <p class="text-xl mb-4">Questions (Preview Mode)</p>
    <template v-for="(question, index) in questions">
      <question-card
        class="mb-4"
        :question-number="index + 1"
        :key="question.name"
        :question="question"
        :type="question.type"
      />
    </template>
  </div>
</template>

<script>
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
    this.questions = await getExams(
      this.$fire.firestore,
      this.$axios,
      this.exam
    );
  },
  async asyncData({ params }) {
    return { exam: params.exam };
  }
};

async function getExams(firestore, axios, examId) {
  const response = await axios.get(`/exams/${examId}`);
  return response.data.questions;
}
</script>
