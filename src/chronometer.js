class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      this.intervalId = 1
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
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let strValue = value.toString()
    if (strValue.length === 1) {
      const finalValue = "0" + strValue
      return finalValue
    }
    return strValue
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}
