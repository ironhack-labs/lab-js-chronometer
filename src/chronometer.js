class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => 
      {
        this.currentTime++
        if(printTimeCallback) {
          printTimeCallback() 
        }
              
      }, 1000)
    }

  getMinutes() {
    let minutesPassed = Math.floor(this.currentTime / 60)
    return minutesPassed
  }

  getSeconds() {
    let secondsAfterMinute = Math.floor(this.currentTime % 60) 
    return secondsAfterMinute
  }

  computeTwoDigitNumber(value) {
    let valueString = ''
    if (value < 10) {
      return valueString = '0' + value.toString()
    }
    return valueString = value.toString()
  }

  stop() {
      clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
      let minutesInTwoDigits = this.computeTwoDigitNumber(this.getMinutes())
      let secondsInTwoDigits = this.computeTwoDigitNumber(this.getSeconds())
      let displayedTime = `${minutesInTwoDigits}:${secondsInTwoDigits}`
      return displayedTime
  }
}
