class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++

      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    let timeGet = Math.floor(this.currentTime / 60)
    return timeGet
  }

  getSeconds() {
    let timeSeconds = Math.floor(this.currentTime % 60)
    return timeSeconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      let lessThanTen = ("0" + value).slice(-2);
      let lessThanTenToString = lessThanTen.toString();
      return lessThanTenToString;
    } else {
      let valueToString = value.toString();
      return valueToString;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
  }
