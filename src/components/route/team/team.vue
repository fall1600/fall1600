<template>
  <div class="container">
    <div id="flow">
      <span class="flow-1"></span>
      <span class="flow-2"></span>
      <span class="flow-3"></span>
    </div>
    <div class="section">

      <h1 class="title">Partners</h1>

      <!-- Developers -->
      <div class="row columns is-multiline">
        <partner
          v-for="(partner, id) in partners"
          :key="id"
          :partner="partner">
        </partner>
      </div>
    </div>
  </div>
</template>

<script>
import partner from '@/components/route/team/_partner'
export default {
  components: {
    partner
  },
  data: () => {
    return {
      partners: [
        {
          name: "Ricky Su",
          avatar: require("../../../assets/partner/rickysu.jpg"),
          title: "Tech Lead",
          key_vision: require("../../../assets/partner/rickysu_key-vision.jpg"),
          link: "https://github.com/RickySu",
          link_title: "RickySu",
          brief: "PHPConf Taiwan 2016 總招, PHP也有Day社群管理員; 從專案架構, 基礎建設, 系統層調校, 應用層規劃, 甚至到辦公室網路, 工作環境安裝, 專治各種疑難雜症",
          projects: ["phpsocket.io", "niceday", "hhvm-ext-uv", "php-livereload", "php_ext_uv", "ukik", "ptsplus", "ubee"]
        },
        {
          name: "板橋",
          avatar: require("../../../assets/partner/ciaochung.jpg"),
          title: "Full Stack",
          key_vision: require("../../../assets/partner/ciaochung_key-vision.jpg"),
          link: "https://ciao-chung.com/",
          link_title: "Ciao's Blog",
          brief: "我喜歡用程式讓周遭人生活上一些重複繁雜的事情能夠更方便, 希望能用我自己的專業, 改變自己跟身邊人的生活",
          projects: ["lungnodule", "godex", "ptsplus", "ukik", "easy-express"]
        },
        {
          name: "jhlin",
          avatar: require("../../../assets/fall1600.jpg"),
          title: "Backend Developer",
          key_vision: require("../../../assets/partner/kp_keep-it-possible.jpg"),
          link: "https://www.fall1600.com",
          link_title: "fall1600.com",
          brief: "接觸 PHP 兩年多，善用composer 的我能站在巨人的肩膀寫程式；熱愛撰寫測試，遵守3a 原則，認為沒有測試過的code 不能發佈。熟悉Symfony 以及Vue，歡迎來到我的網站",
          projects: ["lungnodule", "godex", "ubee", "ptsplus", "ukik"]
        },
        {
          name: "Bubble",
          avatar: require("../../../assets/partner/bubblechiu.jpg"),
          title: "Backend Developer",
          key_vision: require("../../../assets/partner/bubblechiu_key-vision.jpg"),
          link: "https://registry.jsonresume.org/bubble",
          link_title: "Bubble Chiu",
          brief: "REST API的設計、前端JavaScript撰寫、Html、PHP後端處理資料流以及串接資料庫以及功能抽離以及完整功能測試以及單元測試。",
          projects: ["godex", "ptsplus", "ubee", "ukik", "n-soyoung", "wholesome1974"]
        },
        {
          name: "Lisa",
          avatar: require("../../../assets/partner/lisalin.png"),
          title: "UI UX / Frontend",
          key_vision: require("../../../assets/partner/kp_wisdom.jpg"),
          link: "https://plus.google.com/u/1/111884861735059015453",
          link_title: "Lisa Lin",
          brief: "想學切板嗎? 來我教你",
          projects: ["godex", "ptsplus", "ukik", "n-soyoung", "wholesome1974"]
        },
        {
          name: "Kelly",
          avatar: require("../../../assets/partner/kellychen.jpg"),
          title: "UI UX/ Frontend",
          key_vision: require("../../../assets/partner/kp_wisdom.jpg"),
          link: "",
          link_title: "",
          brief: "想學切板嗎? 來我教你",
          projects: ["godex", "ptsplus", "ukik", "n-soyoung", "wholesome1974"]
        },
        {
          name: "Paul",
          avatar: require("../../../assets/partner/paulhsu.jpg"),
          title: "Project Manager",
          key_vision: require("../../../assets/partner/kp_problem.jpg"),
          link: "",
          link_title: "",
          brief: "需求不明什麼的, 就交給我吧",
          projects: ["lungnodule", "ukik", "easy-express"]
        }
      ]
    }
  }
}
</script>