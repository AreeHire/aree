<template>
  <p class="text-2xl my-4">{{ text }}</p>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  }
});
</script>
