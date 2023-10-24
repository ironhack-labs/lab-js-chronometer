class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(typeof printTimeCallback === 'function'){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let currentMin = Math.floor(this.currentTime / 60)
    return currentMin
  }

  getSeconds() {
    // ... your code goes here
    let currentSec = this.currentTime % 60
    return currentSec
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = value.toString();

    if(valueString.length <= 1){
      return `0${valueString}`
    } else {
      return valueString
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return '' + this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds());
  }
}
