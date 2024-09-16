class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( () => {
    if (printTimeCallback) {
      printTimeCallback()
    }
    this.currentTime++
    },1000)
  }

  getMinutes() {
  return Math.floor(this.currentTime /60)
  }
  
  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      let string = "0" + value
    return string
    } else return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    let string = this.computeTwoDigitNumber(minutes) + ":" + this.computeTwoDigitNumber(seconds)
    return string
  }
}