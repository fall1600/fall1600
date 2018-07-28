<template>
  <div class="container">
    <div class="notification">
      <Namecard/>
      <!-- <UbeeIO/> -->
    </div>
  </div>
</template>

<script>
import Namecard from './Namecard.vue'
import UbeeIO from './UbeeIO.vue'
export default {
  components: {
    Namecard, UbeeIO
  }
}
</script>

<style scoped>
</style>
