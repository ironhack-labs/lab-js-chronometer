class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime= 0
    this.intervalId=null
  }

  start(printTimeCallback) {
    setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime++
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
