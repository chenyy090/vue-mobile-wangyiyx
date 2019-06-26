import Vue from 'vue'
import Vuex from 'vuex'

//引入四个对象
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//引入三个模块
import classify from './modules/classify'
import discern from './modules/discern'
import cross from './modules/cross'
import search from './modules/search'
import searchComplete from './modules/searchComplete'
import valueHistory from './modules/valueHistory'
import upLoading from './modules/upLoading'


Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    classify,
    discern,
    cross,
    search,
    searchComplete,
    valueHistory,
    // upLoading
  }
})

/*
vuex管理的状态数据：
{
  msite:{},
  shop:{},
  user:{}
}*/

// 得到user:state.user.user
//              模块名.状态