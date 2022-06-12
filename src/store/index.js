import { createStore } from 'vuex'

export default createStore({
  state: {
    isMarkupPanelVisible: false,
    route: null,
  },
  getters: {
    isComponentDetailView(state) {
     return state.route?.name === 'component-detail';
    },
  },
  mutations: {
    setRoute(state, route) {
      state.route = route;
    },
    toggleMarkupPanel(state) {
      state.isMarkupPanelVisible = !state.isMarkupPanelVisible
    }
  },
  actions: {
  },
  modules: {
  }
})
