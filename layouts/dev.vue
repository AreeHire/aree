<template>
  <div class="font-serif dark:bg-black dark:text-white">
    <Modal v-if="activeModal" />
    <Nuxt class="p-4" />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
  computed: {
    activeModal() {
      return this.$store.state.modals.activeModal;
    }
  }
};
</script>
