<template>
  <div>
    <Title :text="`Candidate - ${candidate.email}`" />
    <p>Score: {{ candidate.score }}</p>
    <template v-for="(question, index) in questions">
      <question-card
        class="mb-4"
        :questionNumber="index + 1"
        :key="index"
        :question="question"
        :value="getAnswer(index)"
        :type="question.type"
      />
    </template>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  data() {
    return {
      candidate: {},
      exam: {},
      questions: [],
      answers: []
    };
  },
  methods: {
    getAnswer(index) {
      const answer = this.answers[index];
      if (answer) return answer.value;

      return [];
    }
  },
  async fetch() {
    const candidate = await getCandidate(this.$axios, this.candidateId);
    const exam = await getExam(this.$axios, candidate.examId);

    this.candidate = candidate;
    this.answers = Object.assign({}, candidate.answers);
    this.exam = exam;
    this.questions = exam.questions;
  },
  asyncData({ params }) {
    return { candidateId: params.candidate };
  }
};

async function getCandidate(axios, candidateId) {
  const response = await axios.get(`/candidates/${candidateId}`);
  return response.data;
}

async function getExam(axios, examId) {
  const response = await axios.get(`/exams/${examId}`);
  return response.data;
}
</script>
