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
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let acc = this.currentTime / 60
    return Math.floor(acc)
  }

  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60
    return sec
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let digit0 = '0'
    let num = value.toString()
    if (num.length === 1) {
      return digit0 + num
    }
    else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())} `
  }
}
