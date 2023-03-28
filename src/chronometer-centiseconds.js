class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if(printTimeCallback != undefined){
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60 / 100)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100 )
  }

  computeTwoDigitNumber(value) {
    if(value > 9){
    return value.toString()
    }
    return "0" + value.toString()

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds())
    const currentCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return currentMinutes + ":" + currentSeconds + "." + currentCentiseconds

  }
}

