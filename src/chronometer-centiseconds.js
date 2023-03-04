class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60);
  }

  getSeconds() {
    return (this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor((this.currentTime % 6000) % 100);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString();
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // return (
    //   this.computeTwoDigitNumber(this.getMinutes()) +
    //   ":" +
    //   this.computeTwoDigitNumber(this.getSeconds()) +
    //   "." +
    //   this.computeTwoDigitNumber(this.getCentiseconds())
    // );
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
