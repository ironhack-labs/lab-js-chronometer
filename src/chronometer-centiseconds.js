class Chronometer{
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
    }, 10)
  }

  getMinutes() {
    return ~~(this.currentTime/6000)
  }

  getSeconds() {
    return ~~(this.currentTime/100) % 60
  }

  getCentiseconds() {
    return ~~(this.currentTime%100)
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `${("0" + value).slice(-2)}`: `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes())
    const sec = this.computeTwoDigitNumber(this.getSeconds())
    const cents = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${min}:${sec}.${cents}`
  }
}
