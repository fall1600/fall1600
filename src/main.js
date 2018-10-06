import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import routers from './routers.js'
import icons from './libs/icons.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routers,
  store: store
}).$mount('#app')
