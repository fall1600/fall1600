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
      <!-- fixme 補abstract -->
      簡介: 以重構為出發點, 拆除過時程式碼與整體系統維護 <br><br>
      <img src="../../../assets/story/fbbought_main.png" alt="">
      <br>
    </div>
    <hr>
    <div>
      第一波重構, 清除多餘程式碼 <br>
      自行定義dead code: 很久沒被執行的 code, 不再被需要的 code, 像過年大掃除一樣, 用不到就丟掉<br>
      想法: 從真實的使用情況了解哪些程式碼有在執行, 哪些沒有; 再善用IDE 判斷物件之間調用method 情形 <br>
      方向: access.log → route → controller → service <br>
      實作: 撰寫工具分析access log 中的路徑, 進而產出api 執行頻率報表, 可輔助判斷dead code, 亦可得知哪些api 頻繁執行, 值得進行重構 <br>
      <a
        target="_blank"
        href="https://docs.google.com/presentation/d/1RdKQP1s0DVDhbAlqYUXriBBBmmvGVkvZVlliZppZzgU/edit#slide=id.g5d07d264ad_0_1">
        重構紀錄
      </a>
      <br> <br>
      <img src="../../../assets/story/fbbought_access_log.png" alt="">
      <hr>
      持續型重構, 從單元測試了解應用層邏輯, 進而消除壞味道程式碼 <br>
      一般來說單元測試是在驗證程式碼正確性, 以及持續開發時能妥善保護前後邏輯 <br>
      但在無人能解釋應用層邏輯的情境下, 單元測試幾乎是最低成本取得答案的手段 <br> <br>
      <img src="../../../assets/story/fbbought_unit_test.png" alt="">
      <hr>
      第二波重構, 整單系統核心分析與階段性重構 <br>
      除了分析與了解核心邏輯之外, 並採用設計模式讓程式更具彈性, 可讀性與擴充性 <br>
      策略模式: 因應系統陸續服務各種賣家, 累積了2^3 種賣家行為, 執行期間視賣家設定動態決定對應的具象物件 <br>
      樣板模式: 主演算法套用樣板模式, 讓具象物件實作特定的行為 <br>
      擴充性: 假設新功能想做VIP 會員配貨怎麼實作? 繼承QueryBehavior, 或是SortBehavior 即可 <br>
      <a
        target="_blank"
        href="https://docs.google.com/presentation/d/1RdKQP1s0DVDhbAlqYUXriBBBmmvGVkvZVlliZppZzgU/edit#slide=id.g78eddda551_0_5">
        重構紀錄
      </a>
      <br> <br>
      <img src="../../../assets/story/fbbought_template.png" alt="">
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
