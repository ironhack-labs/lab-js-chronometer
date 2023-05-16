class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback)
        printTimeCallback();
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
   return Number(Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    return Number(Math.floor(this.currentTime % 60))
  }

  computeTwoDigitNumber(value) {
   if(value < 10) {
    return `0${value}`
   }
   return value.toString()
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
