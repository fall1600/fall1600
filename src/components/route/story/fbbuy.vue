<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 v-if="mode==='interview'" class="title">
          FBbuy
          <a target="_blank" href="https://store.fbbuy.com.tw">
            <take-off-icon></take-off-icon>
          </a>
        </h1>
        <h1 v-else-if="mode==='guest'" class="title">整單系統</h1>
        <h2 class="subtitle">重點功能分析與重構, 應用層改善, 系統維護</h2>
      </div>
    </section>

    <div>
      <!-- fixme 補abstract, 換大圖 -->
      簡介: 以重構為原點, 拆除過時程式碼與整體系統維護<br>
      <img src="../../../assets/story/product_main.png" alt="">
      <br>
    </div>
    <hr>
    <div>
      第一波重構, 清除多餘程式碼 <br>
      自行定義dead code: 很久沒被執行的 code, 不再被需要的 code <br>
      想法: 從真實的使用情況了解哪些程式碼有在執行, 哪些沒有 <br>
      方向: access.log → route → controller → service <br>
      實作: 撰寫工具分析access log 中的路徑, 進而產出api 執行頻率報表, 除了可輔助判斷dead code 之外, 亦可得知哪些api 頻繁執行, 值得進行重構 <br>
      <a
        target="_blank"
        href="https://docs.google.com/presentation/d/1RdKQP1s0DVDhbAlqYUXriBBBmmvGVkvZVlliZppZzgU/edit#slide=id.g5d07d264ad_0_1">
        重構紀錄
      </a>
      <hr>
      持續型重構, 從單元測試了解應用層邏輯 <br>
      在無人能解釋應用層邏輯的情境下, 單元測試幾乎是最低成本取得答案的手段
      <hr>
      第二波重構, 整單系統核心分析與階段性重構 <br>
      除了分析與了解核心邏輯之外, 並採用設計模式讓程式更具彈性, 可讀性與擴充性 <br>
      策略模式: 因應系統陸續服務了各種賣家, 累積了2^3 種行為, 因應不同賣家採取不同的具象物件對應 <br>
      樣板模式: 抽象物件中的主演算法以樣板實作, 讓具象物件實作特定的行為 <br>
      擴充性: 配貨想做VIP 怎麼實作? 繼承QueryBehavior, 或是SortBehavior 即可 <br>
      <a
        target="_blank"
        href="https://docs.google.com/presentation/d/1RdKQP1s0DVDhbAlqYUXriBBBmmvGVkvZVlliZppZzgU/edit#slide=id.g78eddda551_0_5">
        重構紀錄
      </a>
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
