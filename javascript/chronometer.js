class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliSeconds = 0;
    this.milliSecondsId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);
    this.milliSecondsId = setInterval(() => {
      this.milliSeconds++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor((this.currentTime * 1.0) / 60);
  }

  getSeconds() {
    return this.currentTime - 60 * this.getMinutes();
  }

  getMilliseconds() {
    return this.milliSeconds - this.currentTime * 100;
  }

  computeTwoDigitNumber(value) {
    let str = value.toString();
    if (str.length === 1) {
      str = '0' + str;
    }
    return str.slice(0, 2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milliSecondsId);
  }

  reset() {
    this.currentTime = 0;
    this.milliSeconds = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds()) +
      ':' +
      this.computeTwoDigitNumber(this.getMilliseconds())
    );
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
