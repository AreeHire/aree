<template>
  <nav
    class="h-screen w-44 fixed bg-gray-900 flex flex-col items-center text-white justify-between font-serif"
  >
    <div class="pt-4">
      <p class="text-3xl pl-6 pr-8">Aree</p>
      <div class="flex flex-col items-center">
        <NuxtLink class="text-lg mt-4" to="/exams"> Exams </NuxtLink>
        <NuxtLink class="text-lg mt-4" to="/candidates"> Candidates </NuxtLink>
      </div>
    </div>
    <div class="mb-10">
      <p class="px-6 text-lg text-center">
        {{ currentUserName }}
      </p>
      <button class="text-center px-8 w-full pt-4 text-blue-300" @click="logout">> Sign out</button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentUserName"])
  },
  methods: {
    logout () {
      this.$store.commit("LOGOUT");
      this.$router.replace("/");
    }
  }
}
</script>
