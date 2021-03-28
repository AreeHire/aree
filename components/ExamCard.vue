<template>
  <a :href="'/exams/' + id">
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
  </a>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    applications: {
      type: Number,
      required: true
    }
  }
};
</script>
