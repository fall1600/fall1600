import Vue from 'vue'
import VueRouter from 'vue-router'

// all route
import Main from './components/Main.vue'
import lungnodule from './components/story/lungnodule.vue'
import ubee from './components/story/ubee.vue'
import godex from './components/story/godex.vue'
import ptsplus from './components/story/ptsplus.vue'
import uknowiknow from './components/story/uknowiknow.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "root",
      component: Main
    },
    {
      path: "/story/lungnodule",
      name: "story-lungnodule",
      component: lungnodule
    },
    {
      path: "/story/ubee",
      name: "story-ubee",
      component: ubee
    },
    {
      path: "/story/godex",
      name: "story-godex",
      component: godex
    },
    {
      path: "/story/ptsplus",
      name: "story-ptsplus",
      component: ptsplus
    },
    {
      path: "/story/uknowiknow",
      name: "story-uknowiknow",
      component: uknowiknow
    }
  ],
})
 
