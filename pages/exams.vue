<template>
  <div>
    <div class="flex justify-between items-center">
      <Title text="Exams" />
      <a href="/create_exam">
        <button class="bg-blue-500 text-white text-lg rounded-md p-2">
          Create
        </button>
      </a>
    </div>
    <div class="flex flex-col h-max">
      <exam-card
        class="w-1/3 mb-4"
        name="Software Engineer"
        :skills="['Javascript', 'Python']"
        :applications="15"
      />
      <exam-card
        class="w-1/3 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <exam-card
        class="w-1/3 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <exam-card
        class="w-1/3 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Title from "@/components/Title.vue";
import ExamCard from "@/components/ExamCard.vue";

export default Vue.extend({
  components: { Title, ExamCard }
});
</script>
