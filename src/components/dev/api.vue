<template>
  <div>
    test api
  </div>
</template>

<script>
  export default {
    created: function () {
      this.$http.put("http://localhost:8000/api/story/1").then((response) => {
          console.log(response.data)
      })
    },
  }
</script>