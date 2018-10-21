<template>
  <div class="column is-one-quarter">
    <div class="card large">
      <div class="card-image">
        <figure class="image">
          <img
            :src="partner.key_vision"
            alt="key vision">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img
                :src="partner.avatar"
                alt="partner avatar">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4 no-padding">{{ partner.name }}</p>
            <p>
              <span class="title is-6">
                <a
                  :href="partner.link"
                  target="_blank">
                  {{ partner.link_title }}
                </a>
              </span>
            </p>
            <p class="subtitle is-6">{{ partner.title }}</p>
          </div>
        </div>
        <div class="content">
          {{ partner.brief }}
          <div class="background-icon"><span class="icon-twitter"></span></div>
        </div>
        <div class="content">
          <div>參與過的專案:</div>

          <span
            v-for="project in partner.projects">
            {{ project }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["partner"]
}
</script>

<style lang="sass" scoped>
  .media-left
    img
      height: 100px
      width: auto
</style>