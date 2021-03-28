<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center md:w-2/3 lg:w-1/2">
      <header class="text-xl mb-4">{{ name }}</header>
      <question-card
        v-if="currentQuestion"
        class="mb-4 w-full"
        :questionNumber="index + 1"
        :question="currentQuestion"
      />
      <div class="flex flex-row justify-between w-full">
        <Button type="default" class="w-1/2 mr-4" @click="goToPrevious">
          Back
        </Button>
        <Button class="w-1/2 ml-4" @click="goToNext">
          <span v-if="index < questions.length - 1">Next</span>
          <span v-if="index === questions.length - 1">Submit!</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "~/components/QuestionCard.vue";

export default {
  components: { QuestionCard },
  data() {
    return { name: "", questions: [], index: 0 };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.index];
    }
  },
  methods: {
    goToPrevious() {
      if (this.index === 0) return;

      this.index = this.index - 1;
    },
    goToNext() {
      if (this.index === this.questions.length - 1) return;

      this.index = this.index + 1;
    }
  },
  async fetch() {
    const exam = await getExam(this.$axios, this.exam);

    this.name = exam.name;
    this.questions = exam.questions;
  },
  asyncData({ params }) {
    return { exam: params.exam };
  },
  layout: "dev"
};

async function getExam(axios, examId) {
  const response = await axios.get(`/exams/${examId}`);
  return response.data;
}
</script>
