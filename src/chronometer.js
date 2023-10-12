class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString()
    const valueFixed = valueString.padStart(2, '0')
    return valueFixed
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
