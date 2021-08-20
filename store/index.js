import { auth } from "firebase/auth";

export const state = () => ({
  user: false,
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, context) => {
    if (context.authUser) {
      const { uid, email, emailVerified, displayName } = context.authUser;
      state.user = { uid, email, displayName };
    } else {
      context.claims = false;
      state.user = false;
    }
  },
  LOGOUT: (state, context) => {
    state.user = false;
  },
};

export const actions = {
  onAuthStateChangedAction: async (ctx, { authUser, claims }) => {
    if (!authUser) {
      console.warn("not logged in");
    } else {
      const token = await authUser.getIdToken();
      window.localStorage.setItem("idToken", token);
    }
  },
};

export const getters = {
  isLoggedIn: (state) => {
    return state.user && state.user.uid !== null;
  },
  currentUserId: (state) => {
    return state.user && state.user.uid;
  },
  currentUserName: (state) => {
    return state.user && state.user.displayName;
  },
};
