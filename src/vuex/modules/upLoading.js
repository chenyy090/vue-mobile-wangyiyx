import {
  reqUpLoading
} from '../../api'


import {
  GET_UPLOADING
} from '../mutation-types'



//1
const state = {
  upLoading: []
}

//2
const mutations = {
  [GET_UPLOADING](state, upLoading) {
    state.upLoading = upLoading
  }
}

//3
const actions = {

  async getUpLoading ({commit}) {
    const result = await reqUpLoading()
    if(result.code === '200') {
      const upLoading = result.data.result
      commit(GET_UPLOADING, upLoading)
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