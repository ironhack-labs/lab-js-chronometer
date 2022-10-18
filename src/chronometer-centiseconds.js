class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback != null) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let timeMinutes = Math.floor(this.currentTime / 6000);

    return timeMinutes;
  }

  getSeconds() {
    let timeSeconds = Math.floor((this.currentTime / 100) % 60);

    return timeSeconds;
  }

  getCentiseconds() {
    let timeCentiseconds = Math.floor(((this.currentTime / 1000) % 100) % 60);

    return timeCentiseconds;
  }

  computeTwoDigitNumber(value) {
    this.value = ("0" + value).slice(-2);
    return this.value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    let resetTime = (this.currentTime = 0);

    return resetTime;
  }

  split() {
    let splitTime = `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;

    return splitTime;
  }
}
