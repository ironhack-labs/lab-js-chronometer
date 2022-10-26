class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        return printTimeCallback()
      }
    }, 10)

  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // console.log(this.currentTime)
    return Math.floor(this.currentTime / 100) % 60


  }


  getCentiseconds() {
    return this.currentTime % 100
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
    console.log(this.computeTwoDigitNumber(this.getCentiseconds()))
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}