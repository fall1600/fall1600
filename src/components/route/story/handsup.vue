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
        <h2 class="subtitle">7-11 物流服務串接</h2>
      </div>
    </section>

    <div>
      簡介: 實作串接完整7-11 物流 <br><br>
      <img src="../../../assets/story/handsdown_main.png" alt="">
      <br>
    </div>
    <hr>
    <div>
      電商領域中, 物流可說是訂單狀態走到盡頭的最後一哩路, 讓買家在付錢後能順利收貨 <br>
      物流服務就是一種真實世界的非同步請求, 跟物流商請求要號之後, 便開始等待物流商通知狀態變化 <br>
      7-11 資料普遍都是靠定時回檔告知物流單狀態, 實作上依照規格書定義的回檔時間執行撈取特定檔案比對與訂單異動即可 <br><br>
      <img src="../../../assets/story/handsdown_7-11.png" alt="">
      <hr>
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
