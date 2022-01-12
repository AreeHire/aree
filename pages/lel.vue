<template>
  <div>
    <!-- <question-builder
      v-for="(question, index) in questions"
      class="mt-2"
      :question-number="index + 1"
      :question="question"
    /> -->
    <question-builder
      v-for="(question, index) in questions"
      class="mt-2"
      :key="question.name"
      :question-number="index + 1"
      :question="question"
    />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      questions: [
        {
          type: "multiple"
        },
        {}
      ]
    };
  },

  methods: {
    async getQuestions() {
      const questions = await this.$api.get("/questions?tag=javascript");
      this.questions = questions.data;
      console.warn(this.questions);
    }
  },

  async fetch() {
    this.exams = await this.getQuestions();
  }
};
</script>
