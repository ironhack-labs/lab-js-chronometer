class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0;
    this.millisecIntervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);

    this.millisecIntervalId = setInterval(() => {
      if (this.currentMilliseconds === 59) {
        this.currentMilliseconds = 0;
      }
      this.currentMilliseconds++;
      printTimeCallback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentMilliseconds;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length === 2) {
      return `${value}`;
    } else if (value.length === 1) {
      return `0${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    let twoDigMin = this.getMinutes();
    twoDigMin = this.computeTwoDigitNumber(twoDigMin);
    let twoDigSec = this.getSeconds();
    twoDigSec = this.computeTwoDigitNumber(twoDigSec);
    let twoDigMilli = this.getMilliseconds();
    twoDigMilli = this.computeTwoDigitNumber(twoDigMilli);
    return `${twoDigMin}:${twoDigSec}:${twoDigMilli}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
