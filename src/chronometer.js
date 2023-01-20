class Chronometer {
  constructor() {
    // ... your code goes here
   this.currentTime = 0
   this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
   let startId = setInterval((printTimeCallback) => {
    console.log(this.currentTime)
    this.currentTime++
   },1000)
   console.log(startId)
  }

  getMinutes() {
    // ... your code goes here
    return this.currentTime/60
    Math.floor(this.getMinutes)

  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime)

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
