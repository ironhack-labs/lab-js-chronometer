class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
    this.intervalId = intervalId;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    clearInterval(this.intervalId);
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    )}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
  }
}
