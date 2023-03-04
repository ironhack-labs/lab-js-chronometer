
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;// ... your code goes here
  }

  start(printTimeCallback) {
    
    setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)

    // ... your code goes here
  }

  getMinutes() {
    if(this.currentTime === 0) {
     return 0;
    } else {
      return Math.floor(this.currentTime/60)

      
  }}

  getSeconds() {
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
