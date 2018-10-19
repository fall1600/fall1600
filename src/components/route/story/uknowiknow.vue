<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 v-if="mode==='interview'" class="title">
          Uknowiknow
          <a target="_blank" href="https://uknowiknow.com">
            <take-off-icon></take-off-icon>
          </a>
        </h1>
        <h1 v-else-if="mode==='guest'" class="title">課程平台</h1>
      </div>
    </section>

    <div>
      簡介: 課程報名系統 <br>
      說明: 因此專案為我進數位因子的第一個專案, 當時開發進度進尾聲, 故我負責的範圍只有前端套資料 <br>
      <img src="../../../assets/school_main.png" alt="">
      <br>
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