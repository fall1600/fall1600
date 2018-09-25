<template>
  <div>
    <h1 v-if="mode==='interview'" class="title">Uknowiknow</h1>
    <h1 v-else-if="mode==='guest'" class="title">課程平台</h1>
  </div>
</template>

<script>
export default {
  computed: {
    mode: function () {
      return this.$store.getters.mode
    },
  }
}
</script>