class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    let secondsPassed = 0;
    if (this.currentTime % 60 !== 0) {
      secondsPassed = this.currentTime % 60;
      return secondsPassed;
    } else if (this.currentTime === 0) {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    let twoDigit = '';
    if (value < 10) {
      twoDigit = '0' + value.slice();
    } else {
      twoDigit = value.sliceg();
    }
    return twoDigit;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
