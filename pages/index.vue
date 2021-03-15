<template>
  <div class="w-screen h-max mx-6">
    <p class="text-2xl my-4">Exams</p>
    <div class="flex w-screen">
      <exam-card
        name="Software Engineer"
        :skills="['Javascript', 'Python']"
        :applications="15"
      />
      <exam-card
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <button
        class="mx-4 bg-gray-400 w-28 h-12 text-center self-center rounded-md"
      >
        See more...
      </button>
    </div>
    <p class="text-2xl my-4">Candidates (ordered by score)</p>
    <div class="flex w-screen flex flex-col">
      <candidate-card name="Luis Argumedo" job="WASM Engineer" :score="100" />
      <candidate-card
        name="Bismarck Lepe"
        job="Founding Engineer"
        :score="95"
      />
      <candidate-card name="Mauricio Aguilar" job="UX Designer" :score="95" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExamCard from "@/components/ExamCard.vue";
import CandidateCard from "@/components/CandidateCard.vue";

export default Vue.extend({
  components: {
    ExamCard
  }
});
</script>

<style></style>
