class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (typeof printTimeCallback === "function"){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    const twoDigitNumber = value < 10 ? "0" + value.toFixed() : value.toFixed()
    return twoDigitNumber
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const timeDisplayed = minutes + ":" + seconds
    return timeDisplayed
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
