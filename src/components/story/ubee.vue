<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Ubee</h1>
        <h2 class="subtitle">地圖找房, 金流</h2>
      </div>
    </section>
    <div>
      前端地圖找房, 使用 <a href="https://developers.google.com/maps/documentation/?hl=zh-tw" target="_blank">google map</a>, <a href="https://googlemaps.github.io/js-rich-marker/examples/richmarker.html" target="_blank">Rick Marker</a>,
      <a href="https://github.com/googlemaps/js-marker-clusterer" target="_blank">js-marker-clusterer</a>
      <p>
        <img src="../../assets/ubee_map.png" alt="">
      </p>
      <hr>
      後端邏輯分離, 使用 <a href="https://symfony.com/doc/2.8/components/dependency_injection.html" target="_blank">Dependency Injection</a>, <a href="https://symfony.com/doc/2.8/event_dispatcher.html" target="_blank">Event & Event Listener</a>
      <p>
        利用Symfony 提供的di 達到物件設計的單一職責, 有需要別的物件功能再注入, 避免寫出天神物件, 好寫也好測 <br>
        跨模組之間流程則用事件的方式傳遞, 讓註冊事件的物件(listener) 接收, 再派發或自行處理, 以下兩例說明 <br><br>
        舉例1: 收到錢之後的邏輯<br>
        <img src="../../assets/ubee_event_recieve_order.png" alt="">
        <ul>
          <li>系統收到錢之後, 付款模組payment(1024)先接收到事件, 紀錄金流回call 的log, 付款狀態...等</li>
          <li>發票模組invoice(512)再去執行開發票</li>
          <li>訂單模組order(0)收到事件後執行發送商品邏輯</li>
          <li>最後訂單模組另外的listener 執行寄簡訊邏輯(自行注入sms service)</li>
        </ul>
        <br>

        舉例2: 發送商品邏輯 <br>
        <img src="../../assets/ubee_event_delivery_order.png" alt="">
        <ul>
          <li>房屋仲介資料異動</li>
          <li>房屋仲介業務額度提高</li>
          <li>商品方案名稱變更</li>
          <li>商品點數增加</li>
        </ul>
        <br>
      </p>

    </div>
  </div>
</template>
