import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// no-new（没有新的）
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
