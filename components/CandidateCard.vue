<template>
  <div
    class="w-1/2 mb-4 flex flex-row border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-100 justify-between"
  >
    <div class="flex flex-row">
      <div
        class="w-16 h-16 flex justify-center items-center rounded-full bg-gray-900 text-white mr-4"
      >
        AR
      </div>
      <div>
        <p class="font-black">{{ name }}</p>
        <p class="italic">{{ job }}</p>
        <p>
          Score: <span class="text-green-500">{{ score }}%</span>
        </p>
      </div>
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
    job: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  }
};
</script>
