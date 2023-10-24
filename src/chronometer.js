class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      //console.log(printTimeCallback)
      this.currentTime += 1
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    const minute = Math.floor(this.currentTime / 60)
    return minute
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      const numberStringLowDigit = '0' + value
      return numberStringLowDigit
    } else {
      const numberStringHighDigit = `${value}`
      return numberStringHighDigit
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0 
  }

  split() {
    // return a string
    // a string showing the minutes and seconds (mm:ss)
    // when stop is invoked, then print the current value 
  }
    
}
