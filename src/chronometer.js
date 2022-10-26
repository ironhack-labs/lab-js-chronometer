class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback)
        printTimeCallback()
    }, 1000)

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
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }


  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minute + ':' + seconds
  }
}
