class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      if(printTimeCallback){
        printTimeCallback()
      }

      this.currentTime++
    }, 1000);

  }

  getMinutes() {

    let minutes =  Math.floor(this.currentTime/60)
    return minutes

  }

  getSeconds() {

    let seconds = this.currentTime%60
    return seconds

  }

  computeTwoDigitNumber(value) {
    if(value.toString().length === 1){
      return `0${value}`
    }
    return value.toString()
  }

  stop() {

    clearInterval(this.intervalId)

  }

  reset() {

    return this.currentTime = 0

  }

  split() {

    if(this.currentTime < 60){
      return `00:${this.computeTwoDigitNumber(this.getSeconds())}`
    }
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
  
}
