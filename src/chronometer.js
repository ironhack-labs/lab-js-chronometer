class Chronometer {
  constructor() {
    this.currentTime = 0
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
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    const seconds = (this.currentTime % 60)
    return seconds
  }
  computeTwoDigitNumber(value) {
    const twoDigits = ("0" + value).slice(-2)
    return twoDigits
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const finalWatch = (`${this.computeTwoDigitNumber(this.getMinutes)} : ${this.computeTwoDigitNumber(this.getMinutes)}`)
    return finalWatch

  }
}
