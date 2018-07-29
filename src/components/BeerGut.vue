<template>
  <section class="container">
    <div class="columns features">
      <div class="column is-3">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://www.lunlabel.muenai.com">
              <img src="../assets/muenai.png" alt="muen photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>醫療應用平台</h4>
              <span class="item">前端: tune 畫面</span>
              <span class="item">後端: 大檔案續傳</span>
              <span class="item">2018/05</span>
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
              <img src="../assets/ubee.png" alt="ubee photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>房屋比價網站</h4>
              <span class="item">前端: 地圖找房</span>
              <span class="item">後端: 房屋仲介, 金流</span>
              <span class="item">2017/01</span>
              <p>
                <router-link :to="{ name: 'story-ubee'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://www.ptsplus.tv/">
              <img src="../assets/ptsplus.png" alt="ptsplus photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>影音平台</h4>
              <span class="item">後端: DIY page view</span>
              <span class="item">2017/09</span>
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
              <img src="../assets/uknowiknow.svg" alt="ptsplus photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>課程平台</h4>
              <span class="item">前端: 購物車</span>
              <span class="item">2016/12</span>
              <p>
                <router-link :to="{ name: 'story-uknowiknow'}">More</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="columns features">
      <div class="column is-3" v-show="imgFlag">
        <div class="card is-shady">
          <div class="card-image has-text-centered" v-show=imgFlag>
            <a target="blank" href="https://ww2.godexintl.com">
              <img src="../assets/godex.png" alt="godex photo">
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>產品網站</h4>
              <span class="item">後端: 產品及其關聯資料schema設計, 多語系</span>
              <span class="item">2018/02</span>
              <p>
                <router-link class="is-right" :to="{ name: 'story-godex'}">More</router-link>
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
  data: function() {
    return {
      imgFlag: false,
      code: 'f j d k'
    }
  },
  methods: {
    turnOnImg: function() {
      this.imgFlag = true
      cheet(this.code, this.turnOffImg)
    },
    turnOffImg: function() {
      this.imgFlag = false
      cheet(this.code, this.turnOnImg)
    },
    registerCheets: function() {
      cheet(this.code, this.turnOnImg)
    }
  },
  created: function() {
    this.registerCheets()
  }
}
</script>

<style lang="sass" scoped>
section.container
  margin-top: 50px
div.content 
  > span.item
    display: block
  > p
    margin-top: 10px
div.card-image img
  margin-top: 20px
</style>

