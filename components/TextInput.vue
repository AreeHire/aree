<template>
  <input
    class="border-gray-400 border-2 rounded px-1"
    :name="name"
    :required="required"
    @change="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
