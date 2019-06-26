import {
  reqTotalNumbersOfProducts,
  reqClassify
} from '../../api'


import {
  GET_TOTALNUMBER,
  GET_CLASSIFY
} from '../mutation-types'



//1
const state = {
  totalNumbersOfProducts: 0,
  classifyArr: []
}

//2
const mutations = {
  [GET_TOTALNUMBER](state, totalNumbersOfProducts) {
    state.totalNumbersOfProducts = totalNumbersOfProducts
  },
  [GET_CLASSIFY](state, classifyArr) {
    state.classifyArr = classifyArr
  }
}

//3
const actions = {
   async getTotalNumbersOfProducts ({commit}) {
     const result = await reqTotalNumbersOfProducts()
     if(result.code == 200) {
       const totalNumbersOfProducts = result.data
       commit(GET_TOTALNUMBER, totalNumbersOfProducts)
     }
   },

   async getClassify ({commit}) {
    const result = await reqClassify()
    if(result.code === 0) {
      const classifyArr = result.data
      commit(GET_CLASSIFY, classifyArr)
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