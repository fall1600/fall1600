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
        <h2 class="subtitle">重點功能分析與重構, 應用層改善與基礎建設開發, 系統維護</h2>
      </div>
    </section>

    <div>
      <!-- fixme 補abstract -->
      簡介: 深耕Facebook 社群+1 購物系統<br><br>
      <ul class="menu-list">
        <li>
          <a href="https://tw.news.yahoo.com/%E8%87%89%E6%9B%B8%E7%95%99%E8%A8%80-1%E5%8D%B3%E5%8F%AF%E4%B8%8B%E5%96%AE-fbbuy%E5%AE%8C%E7%BE%8E%E8%A7%A3%E6%B1%BA%E5%93%81%E7%89%8C%E9%9B%BB%E5%95%86%E7%9A%84%E7%97%9B%E9%BB%9E-080000533.html" target="_blank">
            Yahoo
          </a>
          </li>
        <li>
          <a href="https://www.bnext.com.tw/article/48921/2018-future-commerce-awards" target="_blank">
            數位時代
          </a>
        </li>
      </ul>
      <br>
      <img src="../../../assets/story/fbbought_superuser_login.png" alt="">
      <br>
    </div>
    <hr>

    <div>
      框架版本從官方放棄支援的Laravel 5.1 升到2020年主流版本7.x<br><br>
      完成接手期間最想做的事: 讓其他RD 也能喜歡在此案子貢獻PR
      <hr>
      整理與開發package<br>
        <ul class="menu-list">
          <li>
            <a href="https://packagist.fbbuy.com.tw/" target="_blank">
              private repository by composer/satis
            </a>
          </li>
          <li><a>member-managers (前人遺作, 整理至上層app 可用)</a></li>
          <li>
            <a href="https://github.com/fall1600/ecpay-invoice/" target="_blank">
              開發綠界發票sdk
            </a>
            <ul>
              <li><a>商城開發票給消費者</a></li>
              <li><a>系統開發票給商城</a></li>
            </ul>
          </li>
          <li>
            <a>models (最有價值物件)</a>
            <ul>
              <li><a>auto-order (cronjob, Laravel 7.x)</a></li>
              <li><a>Repo: great-again(RESTful api, Laravel 7.x)</a></li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/fall1600/newebpay" target="_blank">
              藍新金流package (還真的遇到藍新說要換api domain name)
            </a>
            <ul>
              <li><a>全付方式皆支援, 正流程, 接response encrypt/decrypt 沒煩惱</a></li>
              <li><a>半天內轉移, 驗證過儲存層資料格式</a></li>
            </ul>
          </li>
        </ul>
      <hr>
      訂單模組整組改寫<br>
      <ul class="menu-list">
        <li>
          <a href="https://docs.google.com/presentation/d/1RdKQP1s0DVDhbAlqYUXriBBBmmvGVkvZVlliZppZzgU/edit#slide=id.g78eddda551_0_5" target="_blank">
            文件與程式碼兼具, 原作不在也不怕
            </a>
          </li>
        <li>
          <a>jargon</a>
            <ul>
              <li><a href="">補上Transaction, 從此可以安心下班</a></li>
              <li><a href="">SOLID refactor</a></li>
              <li><a href="">template</a></li>
              <li><a href="">strategy</a></li>
            </ul>
        </li>
        <li>
          <a href="">
            系統內全部賣家批次成立訂單執行時間從35 分鐘縮短至5 分鐘<br><br>
            遇到fb 全球性bug, 積了三天沒跑的資料照樣半小時內執行完畢<br><br>
            <img src="../../../assets/story/fbbought_fb_global_bug.png" alt="">
          </a>
        </li>
      </ul>
    </div>

    <!-- div>
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
    </div -->
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
