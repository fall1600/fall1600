import Vue from 'vue'
import Vuex from 'vuex'
import StoreMode from './modules/mode.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      mode: StoreMode
  }
})
