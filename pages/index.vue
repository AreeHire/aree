<template>
  <div>
    <p class="text-2xl my-4">Outstanding Candidates</p>
    <div class="">
      <candidate-card name="Luis Argumedo" job="WASM Engineer" :score="100" />
      <candidate-card
        name="Bismarck Lepe"
        job="Founding Engineer"
        :score="95"
      />
      <candidate-card name="Mauricio Aguilar" job="UX Designer" :score="95" />
      <button class="bg-gray-400 w-28 h-12 text-center self-center rounded-md">
        See more...
      </button>
    </div>
  </div>
</template>

<script>
import ExamCard from "@/components/ExamCard.vue";
import CandidateCard from "@/components/CandidateCard.vue";

export default {
  components: {
    ExamCard,
    CandidateCard
  }
};
</script>

<style></style>
