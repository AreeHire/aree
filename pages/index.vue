<template>
  <SignIn />
</template>

<script>
import SignIn from "../components/SignIn.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  layout: "dev",
  mounted: function () {
    if (this.isLoggedIn) {
      this.$router.replace("/exams")
    }
  }
};
</script>
