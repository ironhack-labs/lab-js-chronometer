class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const counter = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }


  getSeconds() { 
       const seconds = this.currentTime % 60
       return seconds
  }

   

  computeTwoDigitNumber(value) {
    
   
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
