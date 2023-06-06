class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let minutesNow = Math.floor(this.currentTime / 60);
    return minutesNow;
  }

  getSeconds() {
    let secondsNow = this.currentTime % 60;
    return secondsNow;
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, "0");
  }

  stop() {
    clearInterval(this.currentTime);
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
