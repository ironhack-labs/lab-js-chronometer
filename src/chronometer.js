class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
   this.intervalId = setInterval( () => { 
    this.currentTime += 1 
    if (printTimeCallback) {
     printTimeCallback()
    }
   } , 1000)
    

  }

  getMinutes() {
    // ... your code goes here
    if (!this.currentTime) {
      return 0;
    } else {
    return Math.floor(this.currentTime / 60) ;
    } 
      
  }

  getSeconds() {
    // ... your code goes here
    if (!this.currentTime) {
      return 0;
    } else { 
     return Math.floor(this.currentTime % 60) ;
    } 
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value < 9) {
      return "0" + value.toString()
    } else {
      return value.toString()
    }

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here

  }
}
