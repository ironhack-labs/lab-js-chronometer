class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = null
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 10)
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000)
    return minutes
  }
  getSeconds() {
    const seconds = (this.currentTime / 100) % 60
    return seconds
  }
  getCentiseconds() {
    const centiSeconds = this.currentTime % 100
    return centiSeconds
  }
  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    return stringValue < 10 ? '0' + stringValue : stringValue
  }
  stop() {
    clearInterval(this.intervalId)
  }
  reset() {
    this.currentTime = 0
  }
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}