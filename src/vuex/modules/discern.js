import {
  reqDiscernTabs
} from '../../api'


import {
  GET_TABS
} from '../mutation-types'



//1
const state = {
  tabs: {}
}

//2
const mutations = {
  [GET_TABS](state, tabs) {
    state.tabs = tabs
  }
}

//3
const actions = {

  async getTabs ({commit}) {
    const result = await reqDiscernTabs()
    if(result.code === '200') {
      const tabs = result.data
      commit(GET_TABS, tabs)
    }
  }
}

//4
const getters = {

}


export default {
  state,
  mutations,
  actions,
  getters
}