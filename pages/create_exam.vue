<template>
  <div>
    <Title text="Create Exam" />
    <div class="grid grid-cols-2">
      <div class="">
        <div class="inline-block w-1/2">
          <label class="mr-1" for="examName"> Exam name </label>
          <input
            class="border-gray-400 border-2 rounded px-1 w-1/2"
            name="examName"
            type="text"
            @change="exam = $event.target.value"
          />
        </div>
        <div class="inline-block w-1/2">
          <label class="mr-1" for="examEmail"> Email </label>
          <input
            class="border-gray-400 border-2 rounded px-1 w-1/2"
            name="examEmail"
            type="text"
            @change="email = $event.target.value"
          />
        </div>
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
          <skill-card
            class="mr-4"
            skill="custom"
            imageUrl="/python.png"
            :selected="selected === 'custom'"
            @click="setSelected('custom')"
          />
        </div>
        <button
          class="bg-blue-500 mt-4 p-2 rounded text-white"
          @click="createExam"
        >
          Create
        </button>
      </div>
      <div v-if="selected === 'custom'">
        <question-builder question-number="1"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SkillCard from "@/components/SkillCard.vue";

export default {
  components: { Title, SkillCard },
  data: function() {
    return {
      exam: "",
      selected: "javascript",
      email: ""
    };
  },
  methods: {
    setSelected(language) {
      this.selected = language;
    },
    async createExam() {
      try {
        const response = await this.$api.post("/exams", {
          name: this.exam,
          userId: this.$store.getters.currentUserId,
          language: this.selected,
          email: this.email
        });

        const { id: examId } = response.data;
        this.$router.push(`/exams/${examId}`);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
