<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 v-if="mode==='interview'" class="title">
          Lungnodule
          <a target="_blank" href="https://www.lunlabel.muenai.com">
            <take-off-icon></take-off-icon>
          </a>
        </h1>
        <h1 v-else-if="mode==='guest'" class="title">醫療應用平台</h1>
        <h2 class="subtitle">檔案續傳, 背景程式, 應用程式</h2>
      </div>
    </section>

    <div>
      簡介: 用於醫生標示x光片的智慧醫療平台, 主邏輯分為網頁上的圖片標示, 以及系統的資料上傳與dicom 檔(x光片)解析 <br>
      <img src="../../../assets/story/hospital_main.png" alt="">
      <br><br>
      說明: 資料上傳處理, 前期prototype demo 影片, 用來驗證上傳資料的solution 是有效的<br>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/otsM0GafUQ8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <br>
    </div>

    <hr>

    <div>
      大檔案續傳處理, 使用: <a href="https://tus.io/" target="_blank">tus.io</a>
      <p>
        大檔案有多大? prod 環境目前最大上傳size 為3.3GB, 將近兩部畫質1080p 的電影, dev 環境最大實測為10GB <br>
        tus: 基於http, 專門用於網路上檔案續傳的通訊協定, 透過request 和response的header 做檔案狀態的溝通 <a href="https://docs.google.com/presentation/d/1ZfIwanCpZuE03MaG6MVdnZSqYLtt64eEh0AsEafhuRY/edit#slide=id.p" target="_blank">[筆記]</a>
        <li>OPTIONS: 查詢server 提供的續傳規格, 包含tus 版本, 檔案大小上限, server 支援的續傳行為(creation, expiration... )</li>
        <li>HEAD: 詢問目前檔案的續傳進度</li>
        <li>POST: 建立續傳資源, header 帶檔名換一個在server 上的續傳路徑(https://your.server/files/24e533e02ec3bc40c387f1a0e460e216)</li>
        <li>PATCH: 續傳檔案</li>
        <li>GET: 下載已經上傳好的檔案</li>
      <hr>
      背景程式, 使用: <a href="http://gearman.org/" target="_blank">gearman</a>
      <p>
        續傳成功後, gearman client產生 job, 交由gearman job server 分派, 並註冊對應worker 接手處理 <br>
        另外, 分析資料處理規則後, 我將工作項目拆解, 規劃job, 便能更完善地用到server 效能(根據worker 數量)
      </p>
      <hr>
      Python to app, 使用: <a href="https://pypi.org/project/py2exe/" target="_blank">py2exe</a>, <a href="https://py2app.readthedocs.io/en/latest/" target="_blank">py2app</a>
      <p>
        因部份資料處理的邏輯必須跑在客戶端, 所以提供Windows, Mac上的應用程式 <br>
        以python實現, 也紀錄了研究py2exe, py2app期間踩了一些環境上的地雷 <a href="https://drive.google.com/drive/folders/18p9OZtv3-zDq3oMnbGcsd-2xSiODnsZa?usp=sharing" target="_blank">[筆記]</a>
      </p>
      <hr>
      Tune 畫面
      <p>
        因應業務邏輯需在畫面上快速切換前後幾張圖片做比對, 因此快速載入圖片便為此調校項目 <br>
        除了前端手動預先發api 得到前後物件, 也可採用http2 preload 機制, server 在response header 下preload 的Link, 便能讓前端預先得到下一張圖
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
