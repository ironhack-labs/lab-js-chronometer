class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval( () => {
      this.currentTime ++

      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.round(minutes);
  }

  getSeconds() {
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
