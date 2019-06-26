import Vue from "vue"

import {
  reqManual,
  reqUpLoading
} from '../../api'


import {
  GET_MANUAL,
  GET_UPLOADING
} from '../mutation-types'



//1
const state = {
  manual: [],
  upLoading: []
}

//2
const mutations = {
  [GET_MANUAL](state, manual) {
    manual.forEach(manualPer => {
      manualPer.topics.forEach(topic => {
        const readCount =  topic.readCount

     //方法一：给一个响应式对象添加一个新的属性，这个属性不是响应式（没有数据绑定）
     //    const countInt = Math.floor(readCount / 10000)
     //    topic.countInt = countInt

        // return countInt     forEach()不能return

     //方法二：用set添加属性可以实现响应式属性
        Vue.set(topic, 'countInt', Math.floor(readCount / 10000))
      })
    })
    state.manual = manual
  }
}

//3
const actions = {

  async getManual ({commit}) {
    const result = await reqManual()
    if(result.code === '200') {
      const manual = result.data
      manual.concat(state.upLoading)
      commit(GET_MANUAL, manual)
    }
  },

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