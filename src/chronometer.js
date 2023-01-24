class Chronometer {
  constructor() {
    this.currentTime = 0
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
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) {
      return value.toString()
    }

    else return `0${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

  }
}
