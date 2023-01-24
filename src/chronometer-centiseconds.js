class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 100;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 100);
  }

  getMinutes() {
    const minutes = this.currentTime / 60000;
    return Math.floor(minutes);
  }

  getSeconds() {
    const seconds = this.currentTime % 60000;
    return Math.floor(seconds);
  }

  getCentiseconds() {
    const centiseconds = this.currentTime % 600;
    return Math.floor(centiseconds);
  }

  computeTwoDigitNumber(value) {
    if (value <= 10) {
      return "0" + value;
    } else {
      return String(value);
    }
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
    return `${minutes}:${seconds}`;
  }
}
