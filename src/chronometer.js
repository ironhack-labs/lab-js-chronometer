class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) { printTimeCallback() }
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    return stringValue.length < 2 ? '0' + stringValue : stringValue
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const splitValue = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    return splitValue
  }
}
