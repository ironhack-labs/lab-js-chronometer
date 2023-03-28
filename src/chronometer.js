class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => { 
    this.currentTime++ 
    if (printTimeCallback) { 
    printTimeCallback()}
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.length === 1) {
      return `0${value}`
    } else {
      return value
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
