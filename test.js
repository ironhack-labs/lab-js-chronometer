class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)
  }
  split() {
  let minutes = this.computeTwoDigitNumber(Math.floor(this.currentTime / 60))
  let seconds = this.computeTwoDigitNumber(Math.floor(this.currentTime % 60))
  return `${minutes}:${seconds}`
}
}
let chrono = new Chronometer()
console.log(chrono.split())
