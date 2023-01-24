class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
      }, 10)
  }

  getMinutes() {
    const centiseconds = Math.floor(this.currentTime % 100)
    const now = Math.floor((this.currentTime - centiseconds) / 100)
    const seconds = Math.floor(now % 60)
    return Math.floor((now - seconds) /60)
  }

  getSeconds() {
    const centiseconds = Math.floor(this.currentTime % 100)
    const now = this.currentTime = Math.floor((this.currentTime - centiseconds) / 100)
    return Math.floor(now % 60)
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100)
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

  split() {//It works!! But it doesn't work with checker...why??
    const centiseconds = Math.floor(this.currentTime % 100)
    const now = Math.floor((this.currentTime - centiseconds) / 100)
    const seconds = Math.floor(now % 60)
    const minutes = Math.floor((now - seconds) / 60)
    let c = this.computeTwoDigitNumber(centiseconds)
    let s = this.computeTwoDigitNumber(seconds)
    let m = this.computeTwoDigitNumber(minutes)
  
    return `${m}:${s}:${c}`
  }
}
//let chrono = new Chronometer()
//console.log(chrono.split())
