<template>
  <section class="hero is-light is-middle">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <img class="avatar" src="../assets/fall1600.jpg" alt="Avatar of fall1600">
        <h1 class="title">
          Hello, I am fall1600
        </h1>
        <h2 class="subtitle">
          A Backend engineer who loves
          <a :class="{ buzzword: true, 'is-next-line': isMobile }" target="blank" :href="buzzwords[index].url">#{{buzzwords[index].key}}</a>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import isMobile from '@/libs/mixins/isMobile.js'
export default {
  mixins: [isMobile],
  created: function () {
    const me = this
    setInterval(function () {
      me.swapBuzzword()
    }, 3000)
  },
  methods: {
    swapBuzzword: function () {
      this.index++
      if (this.index == this.buzzwords.length) {
        this.index = 0
      }
    }
  },
  data: () => {
    return {
      index: 0,
      buzzwords: [
        {
          key: "Symfony",
          url: "https://symfony.com/"
        },
        {
          key: "Vue",
          url: "https://vuejs.org/"
        },
      ]
    }
  }
}
</script>


<style lang="sass" scoped>
.buzzword
  margin: auto 10px
  position: absolute
  font-weight: bold
.is-next-line
  display: block
  position: relative
  text-align: center
img.avatar
  max-height: 600px
  width: auto
  filter: blur(2px)
  border-radius: 1%
img.avatar:hover 
  filter: blur(0px)
h1.title
  margin-top: 2em
</style>
