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
          A Backend engineer loves 
          <a class="buzzword" target="blank" href="https://symfony.com/">#Symfony</a>
          <a class="buzzword" target="blank" href="https://vuejs.org/">#Vue</a>
        </h2>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.buzzword
  margin: 5px
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
