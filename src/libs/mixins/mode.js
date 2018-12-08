import cheet from 'cheet.js'
export default {
  created: function() {
    this.registerCheets()
  },
  methods: {
    registerCheets: function() {
      cheet(this.code, {
        next: this._next,
        fail: this._fail,
        done: this.turnOn
      })
    },
    _next: function(str, key, num, seq) {
      if (seq[num] == key) {
        this.$root.$emit("cheet-true", num)
      }
    },
    _fail: function () {
      this.$root.$emit("cheet-false")
    },
    turnOn: function() {
      this.$store.dispatch("set.mode.interview")
      // cheet(this.code, this.turnOff)
      cheet.reset(this.code)
    },
    turnOff: function() {
      this.$store.dispatch("reset.mode")
      cheet(this.code, this.turnOn)
      this.$root.$emit("cheet-false")
    }
  },
  data: function () {
    return {
      code: 'm o r e',
    }
  }
}
