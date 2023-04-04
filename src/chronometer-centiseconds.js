class Chronometer {
  constructor() {
    this.currentTime = 0 //count in centiseconds
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (!printTimeCallback) return 0;
      printTimeCallback();
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    return this.currentTime % 100
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
    let centiStr = this.computeTwoDigitNumber(this.getCentiseconds())

    return `${minStr}:${secStr}:${centiStr}`
  }
}
