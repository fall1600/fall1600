<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">Ptsplus</h1>
        <h2 class="subtitle">DIY Page View</h2>
      </div>
    </section>
    <div>
      DIY Page View, 使用 <a href="http://php.net/manual/en/book.memcache.php" target="_blank">memcache</a>
      <p>
        分析流量判斷採用memcache 做延遲寫入實現page view, 批次回寫以減輕資料庫loading <br>
        memcache 中以linked-list 概念紀錄單位時間中的page view, 處理各種情況的page view 加一
        <a href="https://docs.google.com/presentation/d/1QXNfivxRXH5pCn3jzbpkOuiE0RFSXbs7boHmC9gXnBY/edit" target="_blank">[筆記]</a>
      </p>
      <hr>
    </div>
  </div>
</template>
