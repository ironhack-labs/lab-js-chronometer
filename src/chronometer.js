class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {

    setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 1000);

    return printTimeCallback

  }

  getMinutes() {

    if (this.currentTime === 0) {
      return 0
    }
    return Math.floor(this.currentTime / 60)
  }



  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    }
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
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
