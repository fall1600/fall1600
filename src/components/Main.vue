<template>
  <div>
    <Hero/>
    <BeerGut/>
  </div>
</template>

<script>
import Hero from './Hero.vue'
import BeerGut from './BeerGut.vue'
import modeMixin from '@/libs/mixins/mode.js'
export default {
  mixins: [modeMixin],
  components: {
    Hero, BeerGut
  }
}
</script>

<style lang="sass" scoped>
</style>
