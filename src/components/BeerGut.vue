<template>
  <section class="container">
    <div class="columns features is-multiline">
      <Story
        v-for="story in stories"
        :story="story"
      >
        <component :is="story.icon" slot="icon-slot"></component>
      </Story>
    </div>
  </section>
</template>

<script>
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
  data: function() {
    return {
      stories: [
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
</style>
