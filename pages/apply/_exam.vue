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
    <div v-else class="flex justify-center h-screen">
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
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ExamWelcome from "@/components/ExamWelcome.vue";
import QuestionCard from "@/components/QuestionCard.vue";
import Timer from "@/components/Timer.vue";

export default {
  components: {
    Button,
    ExamWelcome,
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
      phase: "welcome"
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
    },
    numberOfQuestions() {
      return this.questions.length;
    }
  },
  methods: {
    moveToExam() {
      this.phase = "exam";
    },
    handleAnswers(value) {
      this.answers[this.index] = { value };
    },
    goToPrevious() {
      if (this.index === 0) return;

      this.index = this.index - 1;
    },
    goToNext() {
      if (this.index === this.questions.length - 1) {
        const email = window.prompt(
          "Please add your email to complete the submission"
        );

        if (email) this.submitExam(email);
      } else {
        this.index = this.index + 1;
      }
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
  },
  layout: "dev"
};

async function getExam(axios, examId) {
  const response = await axios.get(`/exams/${examId}`);
  return response.data;
}
</script>
