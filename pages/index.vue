<template>
  <div class="w-screen h-max mx-6">
    <p class="text-2xl my-4">Exams</p>
    <div class="flex w-screen">
      <exam-card
        class="mr-4"
        name="Software Engineer"
        :skills="['Javascript', 'Python']"
        :applications="15"
      />
      <exam-card
        class="mr-4"
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
    <p class="text-2xl my-4">Candidates</p>
    <div class="flex w-screen">
      <div>El bis</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExamCard from "@/components/ExamCard.vue";

export default Vue.extend({
  components: {
    ExamCard
  }
});
</script>

<style></style>
