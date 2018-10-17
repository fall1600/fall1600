import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import routers from './routers.js'
import icons from './libs/icons.js'
import VueMeta from 'vue-meta'
import ogImage from './assets/fall1600.jpg'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router: routers,
  store: store,
  metaInfo: function () {
    return {
      title: "fall1600",
      meta: [
        {
          vmid: "keyword",
          name: "keyword",
          content: "fall1600"
        },
        {
          vmid: 'description',
          name: 'description',
          content: 'fall1600'
        },
        {
          vmid: 'og:title',
          property: 'og:title',
          content: 'fall1600'
        },
        {
          vmid: 'application-name',
          name: 'application-name',
          content: 'fall1600'
        },
        {
          vmid: 'article:author',
          property: 'article:author',
          content: 'https://www.fall1600.com'
        },
        {
          vmid: 'article:publisher',
          property: 'article:publisher',
          content: 'https://www.fall1600.com'
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: 'fall1600'
        },
        {
          vmid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: window.location.href
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: "https://www.fall1600.com" + ogImage
        },
        {
          vmid: 'og:site_name',
          property: 'og:site_name',
          content: 'fall1600'
        }
      ]
    }
  }
}).$mount('#app')
