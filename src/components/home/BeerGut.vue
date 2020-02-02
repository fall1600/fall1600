<template>
  <section class="container">
    
    <h1 class="code title is-1 has-text-centered">type 
      <span class="is-italic" :class="{'has-text-primary': statuses[0]}">m</span> 
      <span class="is-italic" :class="{'has-text-primary': statuses[1]}">o</span> 
      <span class="is-italic" :class="{'has-text-primary': statuses[2]}">r</span> 
      <span class="is-italic" :class="{'has-text-primary': statuses[3]}">e</span> 
    </h1>
  
    <div class="columns features is-multiline">
      <Story
        v-for="story in stories"
        :story="story"
        :key=story.id
      >
        <component :is="story.icon" slot="icon-slot"></component>
      </Story>
    </div>
  </section>
</template>

<script>
import handsupImage from '@/assets/story/handsup.png'
import fbbuyImage from '@/assets/story/fbbuy.png'
import muenaiImage from '@/assets/story/muenai.png'
import godexImage from '@/assets/story/godex.png'
import ptsplusImage from '@/assets/story/ptsplus.png'
import ubeeImage from '@/assets/story/ubee.png'
import uknowiknowImage from '@/assets/story/uknowiknow.svg'
import Story from '@/components/home/Story.vue'
export default {
  components: {
    Story
  },
  methods: {
    registerEvents: function () {
      let me = this
      this.$root.$on("cheet-true", function (num) {
        me.statuses[num] = true
        me.$forceUpdate()
      })
      this.$root.$on("cheet-false", function () {
        me.statuses.forEach(function(status, key) {
          me.statuses[key] = false
        })
        let $el = document.getElementsByClassName("code")[0]
        $el.classList.add("shaking")
        me.$forceUpdate()
        setTimeout(function() {
          $el.classList.remove("shaking")
        }, 1000)
      })
    },
    unregisterEvents: function () {
      this.$root.$off("cheet-true")
      this.$root.$off("cheet-false")
    }
  },
  created: function () {
    this.registerEvents()
  },
  beforeDestroy: function () {
    this.unregisterEvents()
  },
  data: function() {
    return {
      statuses: [false, false, false, false],
      stories: [
        {
          title: "Facebook 整單系統",
          real_title: "FBbuy",
          frontend: "維護型調整",
          backend: "重點功能分析與重構, 應用層改善, 系統維護",
          startAt: "2019/07",
          outsideLink: "https://store.fbbuy.com.tw",
          imageSource: fbbuyImage,
          detailRoute: "story-fbbuy",
          icon: "egg-easter-icon"
        },
        {
          title: "直播電商",
          real_title: "HandsUP",
          frontend: "",
          backend: "7-11 物流",
          startAt: "2019/05",
          outsideLink: "https://handsup.shop/",
          imageSource: handsupImage,
          detailRoute: "story-handsup",
          icon: "truck-delivery-icon"
        },
        {
          title: "醫療應用平台",
          real_title: "lungnodule",
          frontend: "tune 畫面",
          backend: "大檔案續傳",
          startAt: "2018/05",
          outsideLink: "https://www.lunlabel.muenai.com",
          imageSource: muenaiImage,
          detailRoute: "story-lungnodule",
          icon: "hospital-building-icon"
        },
        {
            title: "產品網站",
            real_title: "godex",
            frontend: "",
            backend: "產品及其關聯資料schema設計, 多語系",
            startAt: "2018/02",
            outsideLink: "https://www.godexintl.com/?locale=en",
            imageSource: godexImage,
            detailRoute: "story-godex",
            icon: "printer-3d-icon"
        },
        {
          title: "房屋比價網站",
          real_title: "ubee",
          frontend: "地圖找房",
          backend: "房屋仲介, 金流",
          startAt: "2017/05",
          outsideLink: "https://www.ubee.io",
          imageSource: ubeeImage,
          detailRoute: "story-ubee",
          icon: 'home-map-marker-icon'
        },
        {
          title: "影音平台",
          real_title: "ptsplus",
          frontend: "",
          backend: "DIY page view",
          startAt: "2017/09",
          outsideLink: "https://www.ptsplus.tv",
          imageSource: ptsplusImage,
          detailRoute: "story-ptsplus",
          icon: "television-classic-icon"
        },
        {
          title: "課程平台",
          real_title: "uknowiknow",
          frontend: "購物車",
          backend: "",
          startAt: "2016/12",
          outsideLink: "https://uknowiknow.com/",
          imageSource: uknowiknowImage,
          detailRoute: "story-uknowiknow",
          icon: "teach-icon"
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
section.container
  margin-top: 50px

.shaking
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both
    transform: translate3d(0, 0, 0)
    backface-visibility: hidden
    perspective: 1000px

@keyframes shake
  10%, 90%
    transform: translate3d(-1px, 0, 0)
  20%, 80%
    transform: translate3d(2px, 0, 0)
  30%, 50%, 70%
    transform: translate3d(-4px, 0, 0)
  40%, 60%
    transform: translate3d(4px, 0, 0)
</style>
