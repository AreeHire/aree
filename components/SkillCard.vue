<template>
  <div
    class="w-36 h-28 p-1 border-2 border-gray-400 rounded-xl flex flex-col items-center hover:bg-gray-100 cursor-pointer relative"
    @click="$emit('click')"
  >
    <div
      v-if="selected"
      class="border bg-blue-500 w-5 h-5 absolute right-1 rounded-full"
    ></div>
    <div
      v-if="!selected"
      class="border-2 border-gray-400 w-5 h-5 absolute right-1 rounded-full"
    ></div>
    <img class="w-20 h-20 rounded-full" :src="imageUrl" />
    <p class="capitalize text-center">{{ skill }}</p>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  }
};
</script>
