<template>
  <p
    :class="{
      'text-red-500': minutesCounter <= 1
    }"
  >
    <img class="inline w-8 h-8" src="/clock.png" />
    {{ minutesCounter }}:{{
      secondsCounter < 10 ? `0${secondsCounter}` : secondsCounter
    }}
  </p>
</template>

<script>
export default {
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
