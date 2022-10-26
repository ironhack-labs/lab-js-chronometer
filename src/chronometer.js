class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {

    let interval = setInterval(() => {
      this.currentTime++
    }, 1000)
    if (printTimeCallback) {
      setInterval(() => {
        printTimeCallback()
      }, 1000)
    }

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    value = value.toString()
    if (value < 10) {
      return 0 + value

    } else {
      return value
    }
  }

  stop() {
    return clearInterval(this.currentTime)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ":" + seconds

  }
}
