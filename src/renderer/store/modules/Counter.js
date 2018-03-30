const state = {
  chromePath: null
}

const mutations = {
  setChromePath (state, { exec }) {
    console.log(exec)
    state.chromePath = exec
  } 
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
