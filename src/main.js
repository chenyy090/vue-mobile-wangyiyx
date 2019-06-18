import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// })
