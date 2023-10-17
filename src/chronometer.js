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
    }, 1000)

  }


  getMinutes() {

    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {

    return this.currentTime % 60
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
    return `${min}:${sec}`
  }
}
