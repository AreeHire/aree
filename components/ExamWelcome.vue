<template>
  <div class="text-center" @click="$emit('click')">
    <p class="mb-1">
      We welcome you to the challenge for the {{ exam }} exam! It will consist
      on
      <span class="text-cyan-700">{{ numberOfQuestions }} questions</span> you
      will have to solve in {{ minutes }} minutes.
    </p>
    <p class="mb-2">
      The results will be submitted to our platform and in case you did good, we
      will get in touch with the following steps.
    </p>
    <p class="mb-1">Good luck!</p>
    <Button class="w-1/4" @click="$emit('click')">
      Start
    </Button>
  </div>
</template>

<script>
export default {
  props: {
    exam: {
      type: String,
      required: true
    },
    minutes: {
      type: Number,
      required: true
    },
    numberOfQuestions: {
      type: Number,
      required: true
    }
  }
};
</script>
