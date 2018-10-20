<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- <Main/> -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import home from './components/route/home.vue'
import modeMixin from '@/libs/mixins/mode.js'
export default {
  name: 'app',
  mixins: [modeMixin],
  components: {
    home
  }
}
</script>

<style src="../node_modules/bulma/bulma.sass"></style>
<style lang="sass" scoped>
</style>
