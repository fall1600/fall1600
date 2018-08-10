<template>
  <div>
    <h1>Lungnodule</h1>
    <div>
      大檔案續傳處理, 使用: <a href="https://tus.io/" target="_blank">tus.io</a>
      <p>
        tus: 基於http, 專門用於網路上檔案續傳的通訊協定, 透過request 和response的header 做檔案狀態的溝通,
        <li>OPTIONS: 查詢server 提供的續傳規格, 包含tus 版本, 檔案大小上限, server 支援的續傳行為(creation, expiration... )</li>
        <li>HEAD: 詢問目前檔案的續傳進度</li>
        <li>POST: 建立續傳資源, header 帶檔名換一個在server 上的續傳路徑(https://your.server/files/24e533e02ec3bc40c387f1a0e460e216)</li>
        <li>PATCH: 續傳檔案</li>
        <li>GET: 下載已經上傳好的檔案</li>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created: () => {
  }
}
</script>
