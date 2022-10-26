class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)

    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        printTimeCallback()
      }, 1000)
    }

  }

  getMinutes() {
    let result = this.currentTime / 60
    return Math.floor(result)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    if (string.length === 1) {
      return '0' + string
    } else return string

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    return `${minutes}:${seconds}`
  }
}


