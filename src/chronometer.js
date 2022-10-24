class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        return printTimeCallback();
      }
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime > 60) {
      return Math.floor(this.currentTime % 60);
    } else {
      return this.currentTime;
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
