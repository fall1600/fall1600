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
      },

      getStories: async function () {
        let result = await api.getStories()
        console.log(result)
      },

    },
    created: function () {
      let result = this.getStoryById(100)
      console.warn(result)
      this.getStories()
    },
  }
</script>