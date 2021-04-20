<template>
  <div
    class="w-full h-full bg-opacity-40 bg-gray-900 fixed left-0 top-0 z-10 flex justify-center items-center"
    @click.stop="closeModal"
  >
    <div
      class="bg-white w-full h-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-4 z-20 rounded border border-black-100 relative"
      @click.stop
    >
      <header class="border-b-2 border-black-300">
        <p class="text-xl my-4 text-center">Submit Exam</p>
      </header>
      <section class="p-4 flex flex-col justify-between">
        <div class="flex flex-col justify-center">
          <div class="mb-3 flex justify-between">
            <label class="w-1/5"> Name </label>
            <TextInput v-model="name" class="w-4/5" name="username" />
          </div>
          <div class="mb-3 flex justify-between">
            <label class="w-1/5"> Email </label>
            <TextInput
              v-model="email"
              class="w-4/5"
              type="email"
              name="email"
            />
          </div>
          <div class="mt-3 flex flex-row">
            <Button class="w-1/2 mr-10" type="default" @click="closeModal"
              >Cancel</Button
            >
            <Button class="w-1/2" @click="submitExam">Create</Button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data: function() {
    return { name: "", email: "" };
  },
  computed: {
    ...mapState({
      examId: state => state.examApplication.examId,
      answers: state => state.examApplication.answers
    })
  },
  methods: {
    ...mapMutations({
      setScore: "examApplication/setScore",
      setPhase: "examApplication/setPhase"
    }),
    closeModal: function() {
      return this.$store.commit("modals/hideModal");
    },
    submitExam: async function() {
      const result = await this.$axios.post(
        `/exams/${this.examId}/application`,
        {
          name: this.name,
          email: this.email,
          answers: this.answers
        }
      );

      this.setScore(result.data.score);
      this.setPhase("thanks");
      this.closeModal();
    }
  },
  mounted: function() {
    const input = document.getElementsByName("username")[0];
    if (input) input.focus();
  }
};
</script>
