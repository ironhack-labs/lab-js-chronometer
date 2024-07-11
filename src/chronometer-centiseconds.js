class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return `${value.toString().padStart(2, "0")}`
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
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const centiseconds = this.getCentiseconds()
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}.${this.computeTwoDigitNumber(centiseconds)}`
  }
}
