import cheet from 'cheet.js'
export default {
  created: function() {
    this.registerCheets()
  },
  methods: {
    registerCheets: function() {
      cheet(this.code, this.turnOn)
    },
    turnOn: function() {
      this.$store.dispatch("set.mode.interview")
      cheet(this.code, this.turnOff)
    },
    turnOff: function() {
      this.$store.dispatch("reset.mode")
      cheet(this.code, this.turnOn)
    }
  },
  data: function () {
    return {
      code: 'm o r e',
    }
  }
}
