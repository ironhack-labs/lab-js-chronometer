class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback) printTimeCallback()
    }, 10)
  }

  getMinutes() {
    
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime - (6000 * this.getMinutes()))/100)
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    console.log(seconds)
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    console.log( `${minutes}:${seconds}.${centiseconds}`)
    return `${minutes}:${seconds}.${centiseconds}`
  }
}
