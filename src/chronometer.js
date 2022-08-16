class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime++
      if(printTimeCallback) printTimeCallback()
    }, 1000)
    }
   

  getMinutes() {
    return Math.floor(this.currentTime / 60) 
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let str = value.toString()
    if(str.length === 1){
      let str0 = '0' + str
      return str0
    }
    return str
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minute}:${seconds}`
  }
}
