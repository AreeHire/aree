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
    const candidate = await getCandidate(this.$api, this.candidateId);
    const exam = await getExam(this.$api, candidate.examId);

    this.candidate = candidate;
    this.answers = Object.assign({}, candidate.answers);
    this.exam = exam;
    this.questions = exam.questions;
  },
  asyncData({ params }) {
    return { candidateId: params.candidate };
  }
};

async function getCandidate(api, candidateId) {
  const response = await api.get(`/candidates/${candidateId}`);
  return response.data;
}

async function getExam(api, examId) {
  const response = await api.get(`/exams/${examId}`);
  return response.data;
}
</script>
