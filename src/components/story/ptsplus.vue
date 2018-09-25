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
      思維如下,
      <ul>
        <li>case1: 已經存在list 中的加一</li>
        <li>case2: 尚未存在list 中的加一</li>
        <li>case3: list 有資料時的新增一個節點</li>
        <li>case4: list 無資料時的新增一個節點(含初始list)</li>
      </ul>
      <br>
      排程回寫資料庫的處理: <br>
      回寫期間建立另一條list 做紀錄, 達到page view 加一與回寫機制同時運作
      <hr>
    </div>
  </div>
</template>
