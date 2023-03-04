class Chronometer {
  constructor() {
      this.currentTime = 0
      this.intervalId = null
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback()
      }else {}
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {

    // return value.toString().padStart(2, '0')

    if (value > 10) {
      return String(value)
    } else {
      return "0" + String(value)
    }
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let validFormat = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    return validFormat
  }
}
