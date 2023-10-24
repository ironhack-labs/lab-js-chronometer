class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) 
        printTimeCallback()
    }, 1000)
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0
    } else {
      return Math.floor(this.currentTime/60)
    }
  }

  getSeconds() {
    if(this.currentTime === 0){
      return 0
    } else {
      return Math.floor(this.currentTime % 60)
    }
  }

  computeTwoDigitNumber(value) {
    if (value.length === 2){
      return value
    } else {
      return "0" + value
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    
  }
}
