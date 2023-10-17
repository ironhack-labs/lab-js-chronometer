class Chronometer {
  constructor() {
    this.currentTime = 0,
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
    return Math.floor((this.currentTime % 6000) / 100)
  }

  getCentiseconds() {
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }

    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes())
    const sec = this.computeTwoDigitNumber(this.getSeconds())
    const ms = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${min}:${sec}.${ms}`
  }
}

