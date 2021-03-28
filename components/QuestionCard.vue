<template>
  <div
    class="border border-gray-400 rounded-xl p-4 "
  >
    <p class="font-bold mb-3">{{ questionNumber }}. {{ question.name }} -
      <span class="text-cyan-800 text-center">{{ questionType }}</span>
    </p>

    <template v-if="question.type === 'single' || question.type === 'multiple'">
      <div :key="option.value" v-for="(option, index) in question.options">
        <input
          :type="inputType"
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
    inputType: function () {
      return this.question.type === "single" ? "radio" : "checkbox"
    },
    questionType: function () {
      const types = {
        single: 'Single choice',
        multiple: 'Multiple choice',
        text: 'Free text'
      };

      return types[this.question.type]
    }
  }
};
</script>
