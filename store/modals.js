export const state = () => ({
  activeModal: null
});

export const mutations = {
  SHOW_MODAL(state) {
    state.activeModal = true;
  },
  HIDE_MODAL(state) {
    state.activeModal = false;
  }
};
