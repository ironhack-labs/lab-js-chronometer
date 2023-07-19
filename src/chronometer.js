class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {

  }

  split() {
    // ... your code goes here
  }
}
