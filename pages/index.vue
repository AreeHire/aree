<template>
  <form class="block" @submit.prevent="validateLogin">
    <label for="username">Username</label>
    <input
      id="username"
      class="block border border-black rounded p-1 mb-1"
      v-model="username"
      required
      type="text"
    />
    <label for="password">Password</label>
    <input
      id="password"
      class="block border border-black rounded p-1 mb-3"
      v-model="password"
      required
      type="password"
    />
    <button class="block p-1 border border-black rounded">
      Login
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  layout: "dev",
  methods: {
    validateLogin() {
      if (
        (this.username === process.env.authUsername) &
        (this.password === process.env.authPassword)
      ) {
        window.location.href = "/exams";
      } else {
        alert("Invalid password");
      }
    }
  }
};
</script>
