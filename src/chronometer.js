class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
   this.intervalId = setInterval(() => {
   this.currentTime += 1;
    if (typeof printTimeCallback === 'function'){
      printTimeCallback()
    }
   }, 1000)

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60, 0)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60, 0)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? `${("0" + value).slice(-2)}`: `${value}`
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
