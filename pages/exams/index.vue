<template>
  <div>
    <div class="flex justify-between items-center">
      <Title text="Exams" />
      <NuxtLink to="/create_exam">
        <button class="bg-blue-500 text-white text-lg rounded-md p-2">
          Create
        </button>
      </NuxtLink>
    </div>
    <div class="flex flex-col h-max">
      <exam-card
        v-for="exam in exams"
        class="w-1/2 mb-4"
        :key="exam.id"
        :id="exam.id"
        :name="exam.name"
        :language="exam.language"
        :applications="15"
      />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ExamCard from "@/components/ExamCard.vue";

export default {
  middleware: "authenticated",
  components: { Title, ExamCard },
  data() {
    return {
      exams: []
    };
  },
  async fetch() {
    this.exams = await getExams(this.$axios);
  },
};

async function getExams(axios) {
  const response = await axios.get("/exams");
  return response.data;
}
</script>
