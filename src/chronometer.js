class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) { printTimeCallback() }
    }, 1000)

  }

  getMinutes() {

    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return "0" + value
    }
    else {
      return String(value)
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    if (this.currentTime > 0) { this.currentTime = 0 }
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ":" + seconds
  }
}
