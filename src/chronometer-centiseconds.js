class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);

    printTimeCallback &&
      setInterval(() => {
        printTimeCallback();
      }, 10);

    return this.intervalId;
  }

  getMinutes() {
    return parseInt(this.currentTime / 6000);
  }

  getSeconds() {
    return parseInt((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + String(value) : String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds()) +
      '.' +
      this.computeTwoDigitNumber(this.getCentiseconds())
    );
  }
}
