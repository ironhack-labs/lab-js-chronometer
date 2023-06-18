class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
  
      if(printTimeCallback) {
          printTimeCallback()
        }
      }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return Math.floor(this.currentTime/100)% 60
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    if(value<10) return `0${value}`
    else return `${value}`
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
    let centi = this.getCentiseconds()

    let minutes2Dig= this.computeTwoDigitNumber(minutes)
    let seconds2Dig= this.computeTwoDigitNumber(seconds)
    let centi2Dig = this.computeTwoDigitNumber(centi)

    return `${minutes2Dig}:${seconds2Dig}.${centi2Dig}`
  }
}
