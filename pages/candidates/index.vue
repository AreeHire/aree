<template>
  <div>
    <Title class="mb-4" text="Candidates" />
    <candidate-card
      class="w-full"
      v-for="(candidate, index) in candidates"
      :key="index"
      :name="candidate.email"
      :job="candidate.exam"
      :score="candidate.score"
    />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import CandidateCard from "~/components/CandidateCard.vue";

export default {
  components: { Title, CandidateCard },
  data() {
    return { candidates: [] };
  },
  async fetch() {
    const candidates = await getCandidates(this.$axios);
    this.candidates = candidates;
  }
};

async function getCandidates(axios) {
  const response = await axios.get("/candidates");
  console.warn(response.data);
  return response.data;
}
</script>
