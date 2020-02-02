<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 v-if="mode==='interview'" class="title">
          HandsUP
          <a target="_blank" href="https://handsup.shop">
            <take-off-icon></take-off-icon>
          </a>
        </h1>
        <h1 v-else-if="mode==='guest'" class="title">直播電商</h1>
        <h2 class="subtitle">7-11 物流系統串接</h2>
      </div>
    </section>

    <div>
      簡介: 實作串接完整7-11 物流<br>
      <img src="../../../assets/story/product_main.png" alt="">
      <br>
    </div>
    <hr>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mode: function () {
      return this.$store.getters.mode
    },
  }
}
</script>
