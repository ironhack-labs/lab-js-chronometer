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
    if (this.currentTime === 0) return 0
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
    if (this.currentTime === 0) return 0
    return Math.floor(this.currentTime % 60)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2)

    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let second = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${second}`
    // ... your code goes here
  }
}
