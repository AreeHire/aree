<template>
  <div>
    <p class="text-xl mb-4">{{ name }} Questions (Preview Mode)</p>
    <a class="text-blue-800 underline" :href="`/apply/${exam}`">
      Link to Apply
    </a>
    <template v-for="(question, index) in questions">
      <question-card
        class="mb-4"
        :questionNumber="index + 1"
        :key="index"
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
      name: "",
      questions: []
    };
  },
  async fetch() {
    const exam = await getExam(this.$axios, this.exam);

    this.name = exam.name;
    this.questions = exam.questions;
  },
  async asyncData({ params }) {
    return { exam: params.exam };
  }
};

async function getExam(axios, examId) {
  const response = await axios.get(`/exams/${examId}`);
  return response.data;
}
</script>
