import apiRoute from './components/dev/api.vue'
import teamRoute from './components/route/team/team.vue'
import fooRoute from './components/dev/FooBanner.vue'

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
  },
  {
    path: "/foo",
    name: "foo",
    component: fooRoute
  }
]