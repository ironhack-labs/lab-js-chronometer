class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null

  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    if (string.length === 1) {
      return '0' + string
    } else return string
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    return this.currentTime = 0
  }

  split() {

  }
}
