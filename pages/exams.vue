<template>
  <div class="h-screen">
    <div class="flex justify-between items-center">
      <Title text="Exams" />
      <button class="bg-gray-400 text-lg rounded-md p-2">
        + Create
      </button>
    </div>
    <div class="flex flex-row flex-wrap w-full h-max justify-between">
      <exam-card
        class="w-1/2 mb-4"
        name="Software Engineer"
        :skills="['Javascript', 'Python']"
        :applications="15"
      />
      <exam-card
        class="w-1/2 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <exam-card
        class="w-1/2 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <exam-card
        class="w-1/2 mb-4"
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

export default Vue.extend({
  components: { Title }
});
</script>
