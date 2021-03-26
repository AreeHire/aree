<template>
  <div
    class="border-gray-900 w-full h-full bg-opacity-40 bg-gray-900 fixed left-0 top-0 z-10 flex justify-center items-center"
    @click.stop="closeModal"
  >
    <div class="bg-white w-1/3 h-1/2 z-20 rounded border-2 border-black-100 relative"
      @click.stop
    >
      <div class="border-b-2 border-black-300">
        <p class="text-xl my-4 text-center">Create Exam</p>
        <button class="absolute right-0 top-0 m-4 py-1 px-2 border border-red-500 rounded-full" @click="closeModal">Close </button>
      </div>
      <div class="flex flex-col justify-between">
        <form class="inline-block p-4">
          <label class="mr-1" for="examName"> Exam name </label>
          <input class="border-gray-400 border-2 rounded px-1" name="examName" type="text"></input>
        </form>
        <div class="block">
          <button> Create </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal: function () {
      return this.$store.commit("modals/HIDE_MODAL");
    },
  }
}
</script>

<style scoped></style>
