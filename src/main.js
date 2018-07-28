import Vue from 'vue'
import App from './App.vue'
import routers from './routers.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routers
}).$mount('#app')
