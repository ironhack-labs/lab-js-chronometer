class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback ? printTimeCallback() : "";
    }, 10);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor((this.currentTime % 6000) % 100);
  }

  computeTwoDigitNumber(value) {
    return value.toString().length <= 1 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
