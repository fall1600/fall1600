import apiRoute from './components/dev/api.vue'
import teamRoute from './components/route/team/team.vue'

export default [
  {
    path: "/api",
    name: "api",
    component: apiRoute
  },
  {
    path: "/team",
    name: "team",
    component: teamRoute
  }
]