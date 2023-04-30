class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 10);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 6000);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor((this.currentTime / 100) % 60);
    }
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 100;
    }
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
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
