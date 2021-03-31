<template>
  <div class="flex justify-center h-screen">
    <div class="flex flex-col md:w-2/3 lg:w-1/2">
      <div class="flex justify-between items-center mb-1">
        <Timer :minutes="15" />
        <span> {{ questions.length }} Questions </span>
      </div>
      <question-card
        v-if="currentQuestion"
        class="mb-4 w-full"
        :key="index"
        :questionNumber="index + 1"
        :question="currentQuestion"
        :value="currentAnswer"
        @answered="handleAnswered"
      />
      <div class="flex flex-row justify-between w-full">
        <Button type="default" class="w-1/2 mr-4" @click="goToPrevious">
          Back
        </Button>
        <Button class="w-1/2 ml-4" @click="goToNext">
          <span v-if="index < numberOfQuestions - 1">Next</span>
          <span v-if="index === numberOfQuestions - 1">Submit</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: { Button },
  props: {
    questions: {
      type: Array,
      required: true,
      default: []
    },
    answers: {
      required: true
    }
  },
  data() {
    return { index: 0 };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.index];
    },
    currentAnswer() {
      const answer = this.answers[this.index];
      if (answer) return answer.value;

      return [];
    },
    numberOfQuestions() {
      return this.questions.length;
    }
  },
  methods: {
    goToPrevious() {
      if (this.index === 0) return;

      this.index = this.index - 1;
    },
    goToNext() {
      if (this.index === this.questions.length - 1) {
        const email = window.prompt(
          "Please add your email to complete the submission"
        );

        if (email) {
          this.$emit("submitExam", email);
        }
      } else {
        this.index = this.index + 1;
      }
    },
    handleAnswered(value) {
      this.$emit("answered", this.index, value);
    }
  }
};
</script>
