<template>
  <form class="block" @submit.prevent="validateLogin">
    <label for="email">Email</label>
    <input
      id="email"
      class="block border border-black rounded p-1 mb-1"
      v-model="email"
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
      email: "",
      password: ""
    };
  },
  layout: "dev",
  methods: {
    async validateLogin() {
      try {
        console.warn(this.email, this.password);
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
