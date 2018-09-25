<template>
  <div class="column is-3">
    <div class="card is-shady">
      <div class="card-image has-text-centered" v-show=imgFlag>
        <a target="blank" :href="story.outsideLink">
          <img :src="story.imageSource">
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <h4>{{ story.title }}</h4>
          <span v-show="story.frontend" class="item">前端: {{ story.frontend }}</span>
          <span v-show="story.backend" class="item">後端: {{ story.backend }}</span>
          <span class="item">{{ story.startAt }}</span>
          <p>
            <router-link :to="{ name: story.detailRoute }">More</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modeMixin from '@/libs/mixins/mode.js'
export default {
  mixins: [modeMixin],
  props: ["story"],
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
  }
}
</script>

<style lang="sass" scoped>
section.container
  margin-top: 50px
div.card
  height: 100%
div.content 
  > span.item
    display: block
  > p
    margin-top: 10px
div.card-image img
  margin-top: 20px
</style>
