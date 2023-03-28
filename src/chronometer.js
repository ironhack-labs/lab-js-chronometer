class Chronometer {
  constructor() {
    this.currentTime = 0 
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000 )
  }

  getMinutes() {
     return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    value = String (value)
    if (value.length < 2 ){
      return value = 0 + value
    }else {
      return value
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
