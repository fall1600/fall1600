export default {
  state: {
    modes: ["guest", "interview"],
    mode: "guest"
  },
  mutations: {
    'reset.mode' (state) {
      state.mode = "guest"
    },
    'set.mode.interview' (state) {
        state.mode = "interview"
    }
  },
  actions: {
    'reset.mode' (context) {
      context.commit('reset.mode')
    },
    'set.mode.interview' (context) {
      context.commit('set.mode.interview')
    }
  },
  getters: {
    mode (state) {
      return state.mode
    }
  }
}
