class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const startInterval = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 10);

    this.intervalId = startInterval;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return "0" + value;
    return "" + value;
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
