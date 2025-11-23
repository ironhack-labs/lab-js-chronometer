class Chronometer {
  constructor() {
    this.currentTime = 0; // centiseconds elapsed
    this.intervalId = null;
  }

  // Start the timer, counting centiseconds
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++; // increment by 1 centisecond (10ms)
      if (printTimeCallback) printTimeCallback();
    }, 10); // 10ms = 1 centisecond
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000); // 6000 centiseconds = 1 minute
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100); // remaining full seconds
  }

  getCentiseconds() {
    return this.currentTime % 100; // remaining centiseconds in current second
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}:${centiseconds}`;
  }
}

// If using modules, uncomment this line:
// module.exports = Chronometer;
