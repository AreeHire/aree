<template>
  <div v-if="submitted">
    <p>Thanks for applying! Your score is {{ score }}</p>
    <p>Our internal recruiter Alberto Romero will get in touch real soon!</p>
  </div>
  <div v-else class="flex justify-center h-screen">
    <div class="flex flex-col md:w-2/3 lg:w-1/2">
      <header
        class="w-full text-center text-xl pb-1 mb-4 border-b border-black-500"
      >
        {{ name }}
      </header>
      <Timer class="mb-1" :minutes="15" />
      <question-card
        v-if="currentQuestion"
        class="mb-4 w-full"
        :key="index"
        :questionNumber="index + 1"
        :question="currentQuestion"
        :value="currentAnswer"
        @answered="handleAnswers"
      />
      <div class="flex flex-row justify-between w-full">
        <Button type="default" class="w-1/2 mr-4" @click="goToPrevious">
          Back
        </Button>
        <Button class="w-1/2 ml-4" @click="goToNext">
          <span v-if="index < questions.length - 1">Next</span>
          <span v-if="index === questions.length - 1">Submit</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard.vue";
import Timer from "@/components/Timer.vue";

export default {
  components: {
    QuestionCard,
    Timer
  },
  data() {
    return {
      name: "",
      questions: [],
      index: 0,
      answers: {},
      score: 0,
      submitted: false
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.index];
    },
    currentAnswer() {
      const answer = this.answers[this.index];
      if (answer) return answer.value;

      return [];
    }
  },
  methods: {
    handleAnswers(value) {
      this.answers[this.index] = { value };
    },
    goToPrevious() {
      if (this.index === 0) return;

      this.index = this.index - 1;
    },
    goToNext() {
      if (this.index === this.questions.length - 1) {
        const confirmed = window.confirm(
          "Are you sure you want to submit this test?"
        );

        if (confirmed) this.submitExam();
      } else {
        this.index = this.index + 1;
      }
    },
    async submitExam() {
      const result = await this.$axios.patch(`/exams/${this.exam}`, {
        answers: this.answers
      });

      this.score = result.data.score;
      this.submitted = true;
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
