class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()},1000)
  }

  getMinutes() {
   let minutes = Math.floor(this.currentTime / 60) 
   return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      let below10 = (("0" + value).slice(-2)).toString()
      return below10
    } else {
      let greater10 = value.toString()
      return greater10
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
