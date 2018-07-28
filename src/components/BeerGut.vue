<template>
  <section class="container">
    <div class="columns features">
      <div class="column is-3">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://www.lunlabel.muenai.com">
              <img src="http://lorempixel.com/400/100" alt="">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>醫療應用平台</h4>
              <p>後端: 大檔案續傳</p>
              <p>
                <router-link :to="{ name: 'story-lungnodule'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://www.ubee.io/">
             <img src="https://www.ubee.io/static/img/logo.e26b638.png" alt="ubee photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>房屋比價網站</h4>
              <p>前端: 地圖找房</p>
              <p>後端: 房屋仲介, 商品訂單, 金流</p>
              <p>
                <router-link :to="{ name: 'story-ubee'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3" v-show="notOnline">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <img src="https://ww2.godexintl.com/static/img/logo.6ef074c.png" alt="godex photo">
          </div>
          <div class="card-content">
            <div class="content">
              <h4>產品網站</h4>
              <p>產品及其關聯資料設計</p>
              <p>
                <router-link :to="{ name: 'story-godex'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://www.ptsplus.tv/">
              <img src="https://www.ptsplus.tv/static/images/layout/logo_pad.png" alt="ptsplus photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>影音平台</h4>
              <p>後端: DIY page view</p>
              <p>
                <router-link :to="{ name: 'story-ptsplus'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://uknowiknow.com/">
              <img src="https://uknowiknow.com/static/img/ukik_logo.1a32212.svg" alt="ptsplus photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>課程平台</h4>
              <p>前端: 購物車</p>
              <p>
                <router-link :to="{ name: 'story-uknowiknow'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cheet from '../../node_modules/cheet.js/cheet.js'
export default {
  data: function () {
    return {
      imgFlag: false,
      notOnline: false,
      code: "f j d k"
    }
  },
  methods: {
    turnOnImg: function () {
      this.imgFlag = true
      cheet(this.code, this.turnOffImg)
    },
    turnOffImg: function () {
      this.imgFlag = false
      cheet(this.code, this.turnOnImg)
    },
    registerCheets: function () {
      cheet(this.code, this.turnOnImg)
    }
  },
  created: function () {
    this.registerCheets()
  }
}
</script>
