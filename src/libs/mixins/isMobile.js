export default {
  data: function () {
    return {
      deviceWidth: window.innerWidth
    }
  },
  created: function () {
    const me = this
    window.addEventListener(('resize'), function () {
      me.deviceWidth = window.innerWidth
    })
  },
  computed: {
    isMobile: function () {
      if (this.deviceWidth <= 768) {
        return true 
      } 
      return false
    }
  }
}
