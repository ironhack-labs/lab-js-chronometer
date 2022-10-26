class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        return printTimeCallback()
      } else {
        this.currentTime++
      }
    }, 1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    } else {
      return this.currentTime % 60
    }
  }


  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // console.log(value.toString().length)
    if (value < 10) { return `0${value}` } else { return value.toString() }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // console.log(this.computeTwoDigitNumber(this.getMinutes()))
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}