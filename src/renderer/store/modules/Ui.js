const state = {
  drawerOpen: false
}

const getters = {
  isDrawerOpen: state => state.drawerOpen
}

const mutations = {
  TOGGLE_DRAWER_STATUS (state) {
    state.drawerOpen = !state.drawerOpen
  },
  SET_DRAWER_STATUS (state, value) {
    state.drawerOpen = value
  }
}

const actions = {
  toggleDrawerStatus ({ commit }) {
    commit('TOGGLE_DRAWER_STATUS')
  },
  setDrawerStatus ({ commit }, value) {
    commit('SET_DRAWER_STATUS', value)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
