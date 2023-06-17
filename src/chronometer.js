class Chronometer {
  constructor(currentTime = 0, intervalId = null) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
      printTimeCallback && printTimeCallback()
    }, 1000)
  }

  getMinutes() { return Math.floor(this.currentTime / 60)
  }

  getSeconds() { return this.currentTime - this.getMinutes()*60
  }

  computeTwoDigitNumber(value) { return value < 10 ? `0${value}` : `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
