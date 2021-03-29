<template>
  <div>
    <span
      class="bg-gray-100 border border-black-300 rounded px-1 mr-1 cursor-pointer"
      v-for="(question, index) in questions"
      :key="index"
    >
      {{ index }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  }
};
</script>
