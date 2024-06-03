class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 10)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000)
    return minutes
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0

  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const secs = this.computeTwoDigitNumber(this.getSeconds())
    const centSec = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${secs}.${centSec}`
  }
}
