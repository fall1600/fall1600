<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Godex</h1>
        <h2 class="subtitle">產品及其關聯資料, 多語系</h2>
      </div>
    </section>
    <div>
      資料庫schema 開發, 使用 <a href="http://propelorm.org/" target="_blank">Propel</a> <br>
      <p>
        由產品為原點設計關聯資料的規劃與實現, 並支援資料上的多語系(*_i18n) <br>
        <img src="../../assets/godex_product.png" alt="">
      </p>
      <hr>
      <p>
        利用propel 提供的hook function(preSave, preInsert...) 做到應用層級的邏輯設定 <br>
        舉例: 新增產品規格, 可在存入資料庫前抓出相同分類的最接近規格做預設排序, 但非寫在自身儲存邏輯 <br>
        <img src="../../assets/godex_hook.png" alt=""> <br><br>
        產品規格自身儲存邏輯, 因應上圖(schema) 的資料關聯, 藉由發送event 達到程式邏輯解耦合 <br>
        <img src="../../assets/godex_create_spec.png" alt=""> <br><br>
        清查註冊接聽此事件的listener <br>
        $ app/console debug:event-dispatcher
        <img src="../../assets/godex_create_spec_event.png" alt="">
      </p>
      <hr>
    </div>
  </div>
</template>
