<template>
  <p class="text-2xl mb-4">{{ text }}</p>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
