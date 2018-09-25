<template>
  <section class="container">
    <div class="columns features is-multiline">
      <Story
        v-for="story in stories"
        :story="story"
        :imgFlag="imgFlag"
      />
    </div>
  </section>
</template>

<script>
import cheet from '@/../node_modules/cheet.js/cheet.js'
import muenaiImage from '@/assets/muenai.png'
import godexImage from '@/assets/godex.png'
import ptsplusImage from '@/assets/ptsplus.png'
import ubeeImage from '@/assets/ubee.png'
import uknowiknowImage from '@/assets/uknowiknow.svg'
import Story from '@/components/BeerGut/Story.vue'
export default {
  components: {
    Story
  },
  computed: {
    mode: function () {
      return this.$store.getters.mode
    },
    imgFlag: function () {
      if (this.mode === "guest") {
          return false
      }
      if (this.mode === "interview") {
          return true
      }
    }
  },
  data: function() {
    return {
      code: 'f j d k',
      stories: [
        {
          title: "醫療應用平台",
          frontend: "tune 畫面",
          backend: "大檔案續傳",
          startAt: "2018/05",
          outsideLink: "https://www.lunlabel.muenai.com",
          imageSource: muenaiImage,
          detailRoute: "story-lungnodule"
        },
        {
          title: "房屋比價網站",
          frontend: "地圖找房",
          backend: "房屋仲介, 金流",
          startAt: "2018/05",
          outsideLink: "https://www.ubee.io",
          imageSource: ubeeImage,
          detailRoute: "story-ubee"
        },
        {
          title: "影音平台",
          frontend: "",
          backend: "DIY page view",
          startAt: "2017/09",
          outsideLink: "https://www.ptsplus.tv",
          imageSource: ptsplusImage,
          detailRoute: "story-ptsplus"
        },
        {
          title: "課程平台",
          frontend: "購物車",
          backend: "",
          startAt: "2016/12",
          outsideLink: "https://uknowiknow.com/",
          imageSource: uknowiknowImage,
          detailRoute: "story-uknowiknow"
        },
        {
          title: "產品網站",
          frontend: "",
          backend: "產品及其關聯資料schema設計, 多語系",
          startAt: "2018/02",
          outsideLink: "https://ww2.godexintl.com",
          imageSource: godexImage,
          detailRoute: "story-godex"
        }
      ]
    }
  },
  methods: {
    turnOnImg: function() {
      this.$store.dispatch("set.mode.interview")
      cheet(this.code, this.turnOffImg)
    },
    turnOffImg: function() {
      this.$store.dispatch("reset.mode")
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
