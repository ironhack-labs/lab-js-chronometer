class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
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
    return `${mins}:${secs}`
  }
}
