class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    this.currentTime === 3600000;
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    this.currentTime === 3600000;
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value === 0){
      return "00"
    } else if (value < 10){
      return "0" + value.toString()
    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
