<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 v-if="mode==='interview'" class="title">Godex</h1>
        <h1 v-else-if="mode==='guest'" class="title">產品網站</h1>
        <h2 class="subtitle">產品及其關聯資料, 多語系</h2>
      </div>
    </section>

    <div>
      簡介: 以產品為核心的商業網站, 具備多樣關聯物件, 並考慮多語處理<br>
      <img src="../../assets/product_main.png" alt="">
      <br>
    </div>
    <hr>
    <div>
      資料庫schema 開發, 使用 <a href="http://propelorm.org/" target="_blank">Propel</a> <br>
      <p>
        由產品為原點設計關聯資料的規劃與實現, 並支援資料上的多語系(*_i18n) <br>
        <img src="../../assets/product_product_schema.png" alt="">
      </p>
      <hr>
      <p>
        利用propel 提供的hook function(preSave, preInsert...) 做到應用層級的邏輯設定 <br>
        舉例: 新增產品規格, 可在存入資料庫前抓出相同分類的最接近規格做預設排序, 但非寫在自身儲存邏輯 <br>
        <img src="../../assets/product_hook.png" alt=""> <br><br>
        產品規格自身儲存邏輯, 因應上圖(schema) 的資料關聯, 藉由發送event 達到程式邏輯解耦合 <br>
        <img src="../../assets/product_create_spec.png" alt=""> <br><br>
        清查註冊接聽此事件的listener <br>
        $ app/console debug:event-dispatcher <br>
        <img src="../../assets/product_create_spec_event.png" alt="">
      </p>
      <hr>
      <p>
        Nested Set Model 為資料庫中常見的階層式資料儲存, 常見的應用場景為階層式分類或目錄 <br>
        恰好應用在專案中的階層式問答, 此
        <a href="https://docs.google.com/presentation/d/17P6VY9vT18i6zCsWLK0mBXquCJ_S4SN0h1T6v3LUXlE/edit" target="_blank">[文件]</a>
        為我開給remote 前端的api 說明書
        <br>
        <img src="../../assets/product_qatree.png" alt="">
      </p>
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
