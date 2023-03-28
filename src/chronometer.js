class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    
  this.intervalId = setInterval(() => {
    this.currentTime += 1

    if (printTimeCallback != undefined) {
      printTimeCallback()
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
    if (value > 9) {
      return value.toString()
    } else {
      return "0" + value.toString()
    }
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
