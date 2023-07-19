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
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return (this.currentTime / 100) % 60
  }

  getCentiseconds() {
    return ((this.currentTime % 6000) % 100)
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
    const splitCentiSeconds = this.getCentiseconds()
    const computedCentiSeconds = this.computeTwoDigitNumber(splitCentiSeconds)
    const splitSeconds = this.getSeconds()
    const computedSeconds = this.computeTwoDigitNumber(splitSeconds)
    const splitMinutes = this.getMinutes()
    const computedMinutes = this.computeTwoDigitNumber(splitMinutes)
    return computedMinutes + ":" + computedSeconds + "." + computedCentiSeconds
  }
}
