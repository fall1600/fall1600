<template>
  <div>
    <Hero/>
    <BeerGut/>
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import BeerGut from '@/components/home/BeerGut.vue'
export default {
  components: {
    Hero, BeerGut
  }
}
</script>

<style lang="sass" scoped>
</style>
