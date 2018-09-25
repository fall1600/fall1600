export default {
  state: {
      mode: "normal"
  },
  mutations: {
    'set.mode' (state, parameter) {
        state.mode = parameter
    }
  },
  actions: {
      'set.mode' (context, parameter) {
          context.commit('set.mode', parameter)
      }
  },
  getters: {
      mode (state) {
          return state.mode
      }
  }
}
