<template>
  <div class="flex flex-row items-center">
    <Clock class="mr-1" />
    <span
      :class="{
        'text-red-500': minutesCounter <= 1
      }"
    >
      {{ minutesCounter }}:{{
        secondsCounter < 10 ? `0${secondsCounter}` : secondsCounter
      }}
    </span>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";

export default {
  components: { Clock },
  props: {
    minutes: {
      type: Number,
      required: true
    }
  },
  data() {
    return { minutesCounter: this.minutes, secondsCounter: 0 };
  },
  mounted() {
    let minutes = this.minutes;
    let seconds = 0;

    const intervalId = setInterval(() => {
      if (seconds === 0 && minutes == 0) {
        clearInterval(intervalId);
      } else if (seconds === 0) {
        minutes -= 1;
        seconds = 59;
      } else {
        seconds -= 1;
      }

      this.minutesCounter = minutes;
      this.secondsCounter = seconds;
    }, 1000);
  }
};
</script>
