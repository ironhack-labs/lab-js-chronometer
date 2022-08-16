class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      // this.currentTime
      if (printTimeCallback) {
        this.currentTime++
        printTimeCallback()
      } else {
        this.currentTime++
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {

    return this.currentTime % 100

  }

  computeTwoDigitNumber(value) {

    if (value < 10) {
      return "0" + value
    } else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes())
    let secs = this.computeTwoDigitNumber(this.getSeconds())
    let centisecs = this.computeTwoDigitNumber(this.getCentiseconds())

    return mins + ":" + secs + ":" + centisecs
  }
}
