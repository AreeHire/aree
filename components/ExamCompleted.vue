<template>
  <div class="text-center">
    <p>Thanks for applying! Your score is {{ score }}</p>
    <p>Our internal recruiters will get in touch real soon!</p>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true
    }
  }
};
</script>
