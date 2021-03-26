<template>
  <div>
    <Title text="Create Exam" />
    <form class="inline-block w-1/2">
      <label class="mr-1" for="examName"> Exam name </label>
      <input
        class="border-gray-400 border-2 rounded px-1 w-1/2"
        name="examName"
        type="text"
      />
    </form>
    <p class="mt-2 mb-2">Choose a Template</p>
    <div class="flex flex-row">
      <skill-card
        class="mr-4"
        skill="javascript"
        imageUrl="/js.png"
        :selected="selected === 'javascript'"
        @click="setSelected('javascript')"
      />
      <skill-card
        class="mr-4"
        skill="python"
        imageUrl="/python.png"
        :selected="selected === 'python'"
        @click="setSelected('python')"
      />
    </div>
    <button class="bg-blue-500 mt-4 p-2 rounded text-white">Create</button>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SkillCard from "@/components/SkillCard.vue";

export default {
  components: { Title, SkillCard },
  data: function() {
    return {
      selected: "javascript"
    };
  },
  methods: {
    setSelected(language) {
      this.selected = language;
    }
  }
};
</script>
