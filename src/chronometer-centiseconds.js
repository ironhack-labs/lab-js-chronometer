class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
      // Interval is 10 milliseconds
    }, 10);
  }

  getMinutes() {
    // Returns the current time divided by 6000 (1000 milliseconds in a second * 60 seconds in a minute)
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // Divide by 100 to get the number of seconds with decimal places
    // (%) to get the remainder of dividing the total seconds by 60 (the number of seconds in a minute)
    return Math.floor(this.currentTime / 100) % 60;
  }
  getCentiseconds() {
    // Returns the current time divided by 100 and returns the remainder
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString();

    if (valueString.length === 1) {
      return "0" + valueString.slice();
    }
    return valueString;
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

    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
