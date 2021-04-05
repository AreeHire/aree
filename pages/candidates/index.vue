<template>
  <div>
    <Title class="mb-4" text="Candidates" />
    <a
      v-for="(candidate, index) in candidates"
      :key="index"
      :href="`/candidates/${candidate.id}`"
    >
      <candidate-card
        class="w-full"
        :name="candidate.email"
        :job="candidate.exam"
        :score="candidate.score"
      />
    </a>
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
