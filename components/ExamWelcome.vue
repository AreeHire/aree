<template>
  <div class="text-center" @click="$emit('click')">
    <p class="mb-4">We welcome you to the challenge for the {{ exam }} exam!</p>
    <p class="mb-4">
      It will consist on
      <span class="text-cyan-700">{{ numberOfQuestions }} questions</span>. The
      results will be submitted to our platform and in case you did good, we
      will get in touch with the following steps.
    </p>
    <p class="mb-4">Good luck!</p>
    <Button class="w-1/2" @click="$emit('click')">
      Start
    </Button>
  </div>
</template>

<script>
export default {
  props: ["exam", "numberOfQuestions"]
};
</script>
