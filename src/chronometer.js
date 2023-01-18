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
    }, 1000);
    if (printTimeCallback){
      printTimeCallback
    }
  }

  getMinutes() {
    if (this.currentTime === 0){
      return 0
    }
    else{
      return Math.ceil(this.currentTime/6000)
    }
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0){
      return 0
    }
    else{
      return this.currentTime
    }
  }

  computeTwoDigitNumber(value) {
    if (this.currentTime < 10){
      let twoDigit = "0" + value
      return twoDigit
    }
    else if (this.currentTime > 9){
      let twoDigit2 = this.currentTime
      return twoDigit2
    }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
