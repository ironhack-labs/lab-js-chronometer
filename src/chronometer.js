class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)

  }

  getMinutes() {

    return Math.floor(this.currentTime / 60);


  }

  getSeconds() {
    if (this.currentTime <= 60) {

      clearInterval(this.currentTime)
      return this.currentTime
    } else {
      return this.currentTime - 60
    }

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
