class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()

    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100 % 60)
  }

  getCentiseconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    // let mins = this.computeTwoDigitNumber(this.getMinutes())
    // let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()) + '.' + this.computeTwoDigitNumber(this.getCentiseconds())

  }
}
