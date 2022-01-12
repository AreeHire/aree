<template>
  <div class="border border-gray-400 rounded-xl p-4">
    <select v-model="question.type" class="text-cyan-700 mb-1 cursor-pointer">
      <option value="single">Single</option>
      <option value="multiple">Multiple</option>
      <option value="text">Text</option>
    </select>

    <p class="font-bold mb-3">
      {{ questionNumber }}.
      <input
        v-model="question.name"
        class="
          font-black
          m-1
          pb-1
          w-1/2
          focus:outline-none
          border-b border-black
        "
        type="text"
        placeholder="What's the main difference between Javascript and Typescript?"
      />
    </p>
    <div v-if="question.type === 'single' || question.type === 'multiple'">
      <ul class="list-disc ml-5">
        <li class="mt-1" v-for="(option, index) in options">
          <input
            v-model="option.value"
            class="m-1 pb-1 w-1/2 focus:outline-none border-b border-black"
            type="text"
            placeholder="Possible Answer"
          />
          <button class="text-red-500" @click="remove(index)">Remove</button>
        </li>
        <button class="mt-3 text-cyan-700" @click="addAnswer">
          + Add new possible answer
        </button>
      </ul>
    </div>
    <textarea
      v-if="question.type === 'text'"
      class="w-full p-1 border border-black rounded cursor-not-allowed"
      rows="3"
      type="text"
      disabled
      placeholder="Candidate answer goes here"
    />
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
      required: false
    },
    value: {
      required: false,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      questionType: this.question.type,
      options: this.question.options || [
        {
          value: ""
        }
      ]
    };
  },
  methods: {
    addAnswer() {
      this.options = this.options.concat({
        value: ""
      });
    },
    remove(index) {
      this.options = this.options.filter((item, optionIndex) => {
        return index !== optionIndex;
      });
    }
  }
};
</script>
