class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof(printTimeCallback) === "function" ) {
        printTimeCallback();
      }
    }, 1000);
    
  }

  getMinutes() {
    let currentTimeMinutes = this.currentTime / 60;
    return Math.floor(currentTimeMinutes);
  }

  getSeconds() {
    let currentTimeSecondsAfterMin = this.currentTime % 60;
    return currentTimeSecondsAfterMin;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
