class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback(this.currentTime)

      }
    }, 1000)
  }


  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds

  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value.String()
    }
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
