class Chronometer {
  constructor() {
    this.currentTime = 0 //count in seconds
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (!printTimeCallback) return 0;
      printTimeCallback();
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return "0" + value
    return `${value}`
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minStr = this.computeTwoDigitNumber(this.getMinutes())
    let secStr = this.computeTwoDigitNumber(this.getSeconds())

    return `${minStr}:${secStr}`
  }
}
