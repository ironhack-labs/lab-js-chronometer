class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => { // use arrow function to access this object other with a function this will be global object
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 1000) // *the first execution starts AFTER the delay*
    return this.intervalId
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // 2 solutions (the 2nd is never reached so no need to comment it out)
    return this.currentTime % 60
    return this.currentTime - this.getMinutes() * 60
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
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
  }

}

const chrono = new Chronometer();
chrono.start(hello)

setTimeout(() => console.log(chrono.split()), 5100) 
// 5000 returns 00:04 (the timeout function call occurs a little bit too soon)
// 5100 returns 00:05 ok!

function hello() {
  console.log("hello")
}
