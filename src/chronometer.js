class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let totalTime = Math.floor(this.currentTime / 60);
    return totalTime

  }

  getSeconds() {
    if (this.currentTime >= 60)
      return Math.floor(this.currentTime % 60);
    else
      return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      value = "0" + value
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}
