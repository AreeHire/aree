<template>
  <div class="font-serif">
    <Modal v-if="activeModal" />
    <Navbar />
    <Nuxt class="pl-44 mx-6 pt-4" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Navbar,
    Modal
  },
  computed: {
    activeModal() {
      return this.$store.state.modals.activeModal;
    }
  }
};
</script>
