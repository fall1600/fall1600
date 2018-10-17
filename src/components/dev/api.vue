<template>
  <div>
    test api
  </div>
</template>

<script>
  import api from '@/libs/api.js'
  export default {
    created: function () {
      console.warn("foo")
      api.getStoryById(1).then(result => {
          console.warn(result)
      })
      console.warn("bar")
    },
  }
</script>