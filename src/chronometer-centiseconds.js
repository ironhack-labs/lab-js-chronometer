class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId=  setInterval(()=>{ 
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback()
      }
    },10)
  }

  getMinutes() {
    return (Math.floor(this.currentTime/6000))
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString()
    if (stringValue.length === 1) return (`0${stringValue}`)
    return stringValue
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
