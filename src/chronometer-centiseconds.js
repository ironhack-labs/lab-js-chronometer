class Chronometer {
  constructor() {
    this.currentTime = 0 // now stores 10 milliseconds = 1 centisecond instead of seconds
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => { // use arrow function to access this object other with a function this will be global object
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 10) // change here
    return this.intervalId
  }

  // 61 001 ms // % 1000 = 1
  // 61 sec 1 ms
  // 1 min 1 sec 1 ms

  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60)
  }

  getSeconds() {
    // 2 solutions (the 2nd is never reached so no need to comment it out)
    return Math.floor(this.currentTime % (100 * 60) / 100)
    return Math.floor(this.currentTime / 100) - this.getMinutes() * 60
  }

  getCentiseconds() {
    // 2 solutions (the 2nd is never reached so no need to comment it out)
    return this.currentTime % 100
    return this.currentTime - this.getMinutes() * 60 * 100 - this.getSeconds() * 100
  }

  computeTwoDigitNumber(value) {
    return ("00" + value).slice(-2) // adds 2 leading zeros no matter if value has 1 or 2 digits, then extracts from the end the last 2 characters
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime  =0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()) + '.' + this.computeTwoDigitNumber(this.getCentiseconds())
  }
}

// bonus iteration 9 - centiseconds
// chronometer-centiseconds.js
// requires to manually change SpecRunner.html to change Jasmine's js test files
// and also index.html to visualize the chronometer watch in Live Server

const chrono = new Chronometer();

chrono.currentTime = 510
console.log(chrono.split()) // 00:05.10
chrono.currentTime = 1725
console.log(chrono.split()) // 00:17.25