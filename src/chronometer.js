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
    }, 1000);
  }

  getMinutes() {
    let timeMinutes = Math.floor(this.currentTime / 60);

    return timeMinutes;
  }

  getSeconds() {
    let timeSeconds = this.currentTime % 60;

    return timeSeconds;
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
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;

    return splitTime;
  }
}
