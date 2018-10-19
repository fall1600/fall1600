<template>
  <div class="container">
    <div id="flow">
      <span class="flow-1"></span>
      <span class="flow-2"></span>
      <span class="flow-3"></span>
    </div>
    <div class="section">

      <h1 class="title">Goodpartner 的成員</h1>

      <!-- Developers -->
      <div class="row columns">
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
          name: "jhlin",
          avatar: require("../../../assets/fall1600.jpg"),
          title: "Backend Developer",
          key_vision: "https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=",
          link: "https://www.fall1600.com",
          link_title: "fall1600.com",
          brief: "接觸 PHP 兩年多，善用composer 的我能站在巨人的肩膀寫程式；熱愛撰寫測試，遵守3a 原則，認為沒有測試過的code 不能發佈。熟悉Symfony 以及Vue，歡迎來到我的網站",
          projects: ["lungnodule", "godex", "ubee", "ptsplus", "ukik"]
        }
      ]
    }
  }
}
</script>