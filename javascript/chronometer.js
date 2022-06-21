class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const check = typeof printTimeCallback;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (check === 'function') {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    const minutes = this.currentTime / 6000;
    return Number(Math.floor(minutes).toFixed(0));
  }

  getSeconds() {
    const seconds = this.currentTime / 100 - this.getMinutes() * 60;
    return Number(Math.floor(seconds).toFixed(0));
  }

  getMilliseconds() {
    const millis =
      this.currentTime - this.getSeconds() * 100 - this.getMinutes() * 6000;
    return Number(Math.floor(millis).toFixed(0));
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes()),
      sec = this.computeTwoDigitNumber(this.getSeconds()),
      milli = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${min}:${sec}:${milli}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
