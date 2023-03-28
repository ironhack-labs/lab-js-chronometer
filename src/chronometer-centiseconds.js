class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }
  start(printTimeCallback){
    this.intervalId = setInterval(() =>{
      this.currentTime++
      if(!printTimeCallback) return;
      printTimeCallback()
    }, 10)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60)
  }
  getSeconds() {
    let seconds = Math.floor(this.currentTime / 100) % 60
    console.log(seconds)
    return seconds
  }
  getCentiseconds() {
    let centiSeconds = (this.currentTime % 100)
    return centiSeconds
  }
  computeTwoDigitNumber(value) {
    return value < 10 ? "0" + value : value.toString()
  } 
  stop() {
    clearInterval(this.intervalId)
  }
  reset() {
    this.currentTime = 0
  }
  split() {
    let minutesStr = this.computeTwoDigitNumber(this.getMinutes())
    let secondsStr = this.computeTwoDigitNumber(this.getSeconds())
    let centiSecondsStr = this.computeTwoDigitNumber(this.getCentiseconds())
    let stringsCombined = `${minutesStr}:${secondsStr}.${centiSecondsStr}`
    console.log(stringsCombined)
    return stringsCombined
  }
}
