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
        v-for="exam in exams"
        class="w-1/3 mb-4"
        :key="exam.id"
        :id="exam.id"
        :name="exam.name"
        :language="exam.language"
        :applications="15"
      />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Title from "@/components/Title.vue";
import ExamCard from "@/components/ExamCard.vue";

export default {
  components: { Title, ExamCard },
  data: function() {
    return { exams: [] };
  },
  async fetch() {
    this.exams = await getExams(this.$fire.firestore);
  }
};

async function getExams() {
  const url = `http://localhost:5001/hire-latam/us-central1/exams/`;

  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}
</script>
