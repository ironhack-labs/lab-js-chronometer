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
    }, 1000)

  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 60)

  }

  getSeconds() {
    // ... your code goes here

    return Math.floor(this.currentTime % 60)

  }

  computeTwoDigitNumber(value) {

    if (value < 10) {
      '0' + value
    } else {
      value
    }

    return String(value)
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
