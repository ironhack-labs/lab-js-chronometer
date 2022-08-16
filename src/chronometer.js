class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      // this.currentTime
      if (printTimeCallback) {
        this.currentTime++
        printTimeCallback()
      } else {
        this.currentTime++
      }
    }, 1000)
  }

  getMinutes() {

    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {

    if (value < 10) {
      return "0" + value
    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes())
    let secs = this.computeTwoDigitNumber(this.getSeconds())

    return mins + ":" + secs
  }
}
