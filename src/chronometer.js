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
      return Math.floor(this.currentTime / 60)    
  }

  getSeconds() {
      return (this.currentTime % 60)
  }

  getCentiseconds() {
    // count the centiseconds
    // capture the centiseconds when split time
    // reset to 0
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return ('0' + value.toString())
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
    // return a string where time is formatted as mm:ss
    // the split() chan use previously declared methods getMinutes, getSeconds, computeTwoDigitNumber
    let splitMin = this.computeTwoDigitNumber(this.getMinutes())
    let splitSec = this.computeTwoDigitNumber(this.getSeconds())

    return splitMin + ':' + splitSec
  }

}
