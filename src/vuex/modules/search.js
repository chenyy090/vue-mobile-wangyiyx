import {
  reqSearch
} from '../../api'


import {
  GET_SEARCH
} from '../mutation-types'



//1
const state = {
  search: []
}

//2
const mutations = {
  [GET_SEARCH](state, search) {
    state.search = search
  }
}

//3
const actions = {

  async getSearch ({commit}) {
    const result = await reqSearch()
    if(result.code === '200') {
      const search = result.data
        commit(GET_SEARCH, search)
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