class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (typeof printTimeCallback === 'function') {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    return ~~(this.currentTime/60)
  }

  getSeconds() {
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `${("0" + value).slice(-2)}`: `${value}`
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

