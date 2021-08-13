export const state = () => ({
  user: false
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, context) => {
    console.warn(context);

    if (context.authUser) {
      const { uid, email, emailVerified } = context.authUser;
      state.user = { uid, email, emailVerified };
    } else {
      context.claims = false;
      state.user = false;
    }
  }
};

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      console.warn("not loggedi nt");
    } else {
      console.warn("logged in", authUser);
    }
  }
};
