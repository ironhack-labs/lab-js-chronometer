class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
    }, 10);
  }

  getMinutes() {
    const sec = Math.floor(this.currentTime / 100)
    return Math.floor(sec / 60)
  }

  getSeconds() {
    const sec = Math.floor(this.currentTime / 100)
    return sec % 60
  }

  getCentiseconds() {
    return this.currentTime % 100

  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString()
    if (valueString.length === 1) {
      return '0' + valueString
    } else {
      return valueString
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes())
    const secs = this.computeTwoDigitNumber(this.getSeconds())
    const micC = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${mins}:${secs}.${micC}`
  }
}
