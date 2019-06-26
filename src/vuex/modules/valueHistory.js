import {
  reqValueHistory
} from '../../api'


import {
  GET_VALUEHISTORY
} from '../mutation-types'



//1
const state = {
  valueHistory: {}
}

//2
const mutations = {
  [GET_VALUEHISTORY](state, valueHistory) {
    state.valueHistory = valueHistory
  }
}

//3
const actions = {
  async getValueHistory({commit}, valueHis) {
    const result = await reqValueHistory(valueHis)
    if(result.code === '200') {
      const valueHistory = result.data
      commit(GET_VALUEHISTORY, valueHistory)
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