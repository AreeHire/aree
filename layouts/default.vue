<template>
  <div class="font-serif">
    <Navbar />
    <Nuxt class="pl-44 mx-6 pt-4" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  methods: {
    render: function() {
      console.log("Saludos cordiales");
    }
  }
};
</script>
