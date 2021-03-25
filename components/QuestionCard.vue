<template>
  <div
    class="mr-4 border-2 border-black rounded-xl p-4 hover:bg-gray-100"
  >
    <p class="font-bold mb-1">{{ questionNumber }}. {{ question.name }}</p>

    <template v-if="question.type === 'single' || question.type === 'multiple'">
      <div :key="option.value" v-for="(option, index) in question.options">
        <input
          :type="type"
          :key="option.value + index"
          :id="`question-${questionNumber}-${index}`"
          :name="`group-${questionNumber}`"
        ></input>
        <label class="cursor-pointer" :key="option.value" :for="`question-${questionNumber}-${index}`">
          {{ option.value }}
        </label>
      </div>
    </template>
    <template v-if="question.type === 'text'">
      <textarea class="w-full p-1 border-2 border-black rounded" rows="3" type="text" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    questionNumber: {
      type: Number,
      required: true
    },
    question: {
      type: Object,
      required: true
    }
  },
  computed: {
    type: function () {
      return this.question.type === "single" ? "radio" : "checkbox"
    }
  }
};
</script>
