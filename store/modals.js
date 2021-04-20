export const state = () => ({
  activeModal: null
});

export const mutations = {
  showModal(state) {
    state.activeModal = true;
  },
  hideModal(state) {
    state.activeModal = false;
  }
};
