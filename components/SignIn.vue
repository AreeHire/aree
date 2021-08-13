<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
export default {
  async mounted() {
    const firebaseui = require("firebaseui");
    require("firebaseui/dist/firebaseui.css");

    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$fire.auth);

    const config = {
      signInOptions: [{
        provider: this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
      }],
      signInSuccessUrl: "/exams",
    };

    ui.start("#firebaseui-auth-container", config);
  }
};
</script>
