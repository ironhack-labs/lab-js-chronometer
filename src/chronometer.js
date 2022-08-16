class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start(printTimeCallback) {
     this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // let seconds = currentSec - (minutes * 60)
    return Math.floor(this.currentTime %60)
  }

  computeTwoDigitNumber(value) {
    return ('00' + value).slice(-2)
  }

  stop() {
     clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
  let mins = this.computeTwoDigitNumber(this.getMinutes())
  let secs = this.computeTwoDigitNumber(this.getSeconds())
  console.log (`${mins}:${secs}`)
  return `${mins}:${secs}`
  
  }
}
