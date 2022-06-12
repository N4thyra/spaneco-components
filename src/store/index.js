import { createStore } from 'vuex'

export default createStore({
  state: {
    viewCode: false,
  },
  getters: {
  },
  mutations: {
    toggleViewCode(state) {
      state.viewCode = !state.viewCode
    }
  },
  actions: {
  },
  modules: {
  }
})
