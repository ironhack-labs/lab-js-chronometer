class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  getCentiseconds() {
    
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return "0" + value
    }
    return value.toString()
  }

  stop() {
    clearInterval (this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const formatSeconds = this.computeTwoDigitNumber (this.getSeconds(this.currentTime))
    const formatMinutes = this.computeTwoDigitNumber (this.getMinutes(this.currentTime))
    return `${formatMinutes}:${formatSeconds}`
  }
}