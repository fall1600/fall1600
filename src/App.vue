<template>
  <div id="app">
    <FooBanner/>
  </div>
</template>

<script>
import FooBanner from './components/FooBanner.vue'
export default {
  name: 'app',
  components: {
    FooBanner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
