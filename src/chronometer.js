class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
     

    setInterval(() => {
      this.currentTime += 1
      
      console.log(this)
      if (typeof printTimeCallback == "function") {
      printTimeCallback()}
    },1000)
    // ... your code goes here
  }

  getMinutes() {
    this.currentTime
    return Math.floor(this.currentTime/60)
    // ... your code goes here
  }

  getSeconds() {
    this.currentTime
    return Math.floor(this.currentTime % 60)
    // ... your code goes here
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
