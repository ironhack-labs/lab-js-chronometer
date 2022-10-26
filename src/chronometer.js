class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
    if (printTimeCallback) {
      const intervalId = setInterval(() => {
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
    let strNum = value.toString()
    if (strNum.length !== 2) {
      return 0 + strNum
    }
    return strNum
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes())
    let sec = this.computeTwoDigitNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
