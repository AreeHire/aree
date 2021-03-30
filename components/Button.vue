<template>
  <button
    class="py-1 px-2 text-white rounded"
    :class="{
      'bg-gray-500': type === 'default',
      'bg-blue-500': type === 'primary'
    }"
    :type="submit ? 'submit' : null"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "primary"
    },
    submit: {
      type: String,
      required: false,
      default: false
    }
  }
};
</script>
