class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 10)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    if (this.currentTime === 0) return 0

    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString().slice(0)
    }

    return value.toString().slice(0)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return minutes.concat(":", seconds)
  }
}
