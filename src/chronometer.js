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
    
  }
}
