import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'

import router from './router'

import store from './vuex/store'

import Split from './components/Split/Split'

import HeaderSlot from './components/HeaderSlot/HeaderSlot'

import './mock/mockServer'



Vue.config.productionTip = false

Vue.component('Split', Split)

Vue.component('HeaderSlot', HeaderSlot)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// })
