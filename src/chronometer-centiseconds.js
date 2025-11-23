/ src/chronometer-centiseconds.js

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

  // Return full minutes
  getMinutes() {
    return Math.floor(this.currentTime / 6000); // 6000 centiseconds = 1 minute
  }

  // Return seconds in the current minute
  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100); // remaining full seconds
  }

  // Return centiseconds in the current second
  getCentiseconds() {
    return this.currentTime % 100;
  }

  // Format any number as two digits (e.g., 7 => "07")
  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  // Stop the timer
  stop() {
    clearInterval(this.intervalId);
  }

  // Reset the timer to 0
  reset() {
    this.currentTime = 0;
  }

  // Return formatted time "mm:ss:cs"
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}:${centiseconds}`;
  }
}

// If using modules, uncomment the following line
// module.exports = Chronometer;
