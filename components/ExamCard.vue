<template>
  <div
    class="w-1/3 flex flex-row border-2 border-black rounded-xl p-4 cursor-pointer hover:bg-gray-100"
  >
    <div
      class="w-16 h-16 flex justify-center items-center rounded-full bg-gray-900 text-white mr-4"
    >
      JS
    </div>
    <div>
      <p class="font-black">{{ name }}</p>
      <p>
        <span class="text-green">{{ applications }}</span> Applicants
      </p>
      <span
        v-for="skill in skills"
        :key="skill"
        class="bg-gray-300 px-2 mx-1 rounded"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    },
    applications: {
      type: Number,
      required: true
    }
  }
};
</script>
