<template>
  <div
    class="mr-4 flex flex-row border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-100"
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
      <span class="bg-gray-300 px-2 mr-1 rounded capitalize">
        {{ language }}
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
    language: {
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
