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
      v-if="questions.length"
      class="bg-cyan-300 w-28 h-12 text-center self-center rounded-md"
    >
      Submit ALV
    </button>
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
    this.questions = await getJobs(this.$fire.firestore);
  }
};

async function getJobs(firestore) {
  let questionsRef = firestore.collection("questions");
  const questionsSnapshot = await questionsRef.get();
  return questionsSnapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });
}
</script>
