class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId  = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++
      if(printTimeCallback) printTimeCallback()
      },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
    
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
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
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    return `${minutes}:${seconds}`
  }
}
