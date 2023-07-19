class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    value = value.toString()
    if (value.length < 2) {
      return "0" + value
    } else {
      return value
    }
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const splitSeconds = this.getSeconds()
    const computedSeconds = this.computeTwoDigitNumber(splitSeconds)
    const splitMinutes = this.getMinutes()
    const computedMinutes = this.computeTwoDigitNumber(splitMinutes)
    return computedMinutes + ":" + computedSeconds
  }
}
