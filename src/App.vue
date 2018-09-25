<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- <Main/> -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import modeMixin from '@/libs/mixins/mode.js'
export default {
  name: 'app',
  mixins: [modeMixin],
  components: {
    Main
  }
}
</script>

<style src="../node_modules/bulma/bulma.sass"></style>
<style lang="sass" scoped>
</style>
