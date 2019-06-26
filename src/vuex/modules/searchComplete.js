import {
  reqSearchComplete
} from '../../api'


import {
  GET_SEARCHCOMPLETE
} from '../mutation-types'



//1
const state = {
  searchComplete: []
}

//2
const mutations = {
  [GET_SEARCHCOMPLETE](state, searchComplete) {
    state.searchComplete = searchComplete;
  }
}

//3
const actions = {
  async getSearchComplete ({commit}, keywordPrefix) {
    const result = await reqSearchComplete(keywordPrefix)
    if(result.code === '200') {
      const searchComplete = result.data
      //console.log(searchComplete)
      commit(GET_SEARCHCOMPLETE, searchComplete)
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