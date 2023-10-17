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
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 9) {
      return "0" + value
    } else {
      return "" + value
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let min = this.getMinutes()
    let sec = this.getSeconds()

    let minFormated = this.computeTwoDigitNumber(min)
    let secondsFormated = this.computeTwoDigitNumber(sec)

    return `${minFormated}:${secondsFormated}`
  }
}
