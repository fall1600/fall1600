import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import routers from './routers.js'

import "vue-material-design-icons/styles.css"
import TakeOffIcon from "vue-material-design-icons/AirplaneTakeoff.vue"
Vue.component("take-off-icon", TakeOffIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routers,
  store: store
}).$mount('#app')
