<template>
  <div class="flex justify-center text-center">
    <div class="flex flex-col w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <p class="mb-1">
        We welcome you to take upon this new challenge! The following test will
        consist on
        <span class="text-cyan-700">{{ numberOfQuestions }} questions</span> you
        will have to solve in {{ minutes }} minutes.
      </p>
      <p class="mb-2">
        The results will be submitted to our platform and in case you did good,
        we will get in touch with the following steps.
      </p>
      <p class="mb-4">Good luck!</p>
      <div class="flex justify-center">
        <!-- <div class="flex flex-col justify-center">
          <div class="mb-1 flex justify-between">
            <label class="mr-4"> Name </label>
            <TextInput name="name" />
          </div>
          <div class="mb-1 flex justify-between">
            <label> Email </label>
            <TextInput type="email" name="email" />
          </div> -->
        <Button class="w-1/4 self-center" @click="$emit('click')">
          Start
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

export default {
  components: { TextInput },
  props: {
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
