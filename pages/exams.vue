<template>
  <div class="h-max mx-6">
    <Title text="Exams" />
    <div class="flex flex-row flex-wrap w-full h-max justify-between">
      <exam-card
        class="w-2/3 mb-4"
        name="Software Engineer"
        :skills="['Javascript', 'Python']"
        :applications="15"
      />
      <exam-card
        class="w-2/3 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <exam-card
        class="w-2/3 mb-4"
        name="Founding Engineer"
        :skills="['WASM', 'Rust']"
        :applications="142"
      />
      <exam-card
        class="w-2/3 mb-4"
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
