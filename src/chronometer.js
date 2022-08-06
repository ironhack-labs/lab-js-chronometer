class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.currentTime = this.currentTime + 1
    this.intervalId = setInterval(printTimeCallback, 1000)
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }
    //this.currentTime.getMinutes()
    return Math.floor(this.currentTime/60)
    
    
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value.toString.slice(-2)
    return value
  }

  stop() {
    // ... your code goes here
    clearInterval()
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
