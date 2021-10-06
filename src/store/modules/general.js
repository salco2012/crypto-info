export default {
  state: {
    error: null,
  },
  mutations: {
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    CLEAN_ERROR(state) {
      state.error = null;
    },
  },
  getters: {
    getError: (state) => state.error
  },
};
