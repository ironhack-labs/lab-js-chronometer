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
      
    },1000)
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0
    }
    return  Math.floor((this.currentTime)/60)
  }

  getSeconds() {
    return (this.currentTime)%60
  }

  computeTwoDigitNumber(value) {
    value = String(value)

    if(value.length ===1){
        value = "0" + value
    }
    return value
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
  }
}
