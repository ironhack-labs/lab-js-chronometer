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
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString()

    if (valueString.length === 1) 
      return `0${valueString}`
    return valueString
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    
    return `${minutes}:${seconds}`
  }
  
}
