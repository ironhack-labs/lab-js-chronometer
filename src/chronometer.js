class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
    }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // we should always get twoDigits
    // 5 should be 05
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
