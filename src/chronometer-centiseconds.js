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
    if (this.currentTime) {
      return Math.floor((this.currentTime/100) / 60);
    } else {
      return 0;
    }
  }

  getSeconds() {
    if (this.currentTime) {
      return Math.floor((this.currentTime/100) % 60);
    } else {
      return 0;
    }
  }

  getCentiseconds() {
    if (this.currentTime) {
      return Math.floor(this.currentTime % 100);
    } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
