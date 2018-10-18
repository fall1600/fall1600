<template>
  <div>
    test api
  </div>
</template>

<script>
  import api from '@/libs/api.js'
  export default {
    methods: {
      getStoryById: async function (id) {
        console.log("foo")
        let result = await api.getStoryById(id)
        console.log(result)
        console.log("bar")
        return new Promise(function (resolve, reject) {
          resolve(result)
        })
      }
    },
    created: function () {
      let result = this.getStoryById(1)
      console.warn(result)
    },
  }
</script>