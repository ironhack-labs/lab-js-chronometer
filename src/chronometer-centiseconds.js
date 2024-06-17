class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId=setInterval(()=>{
      this.currentTime ++
      if(printTimeCallback) printTimeCallback()   //I don´t understand this line of code
    },10)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime/100)%60)
  }

  getCentiseconds() {
    return this.currentTime%100                  //I don´t understand this line of code
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const secs    = this.computeTwoDigitNumber(this.getSeconds())
    const centSec = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${secs}.${centSec}`
  }
}
