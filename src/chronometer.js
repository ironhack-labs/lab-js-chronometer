class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  
  }

  start(printTimeCallback) {
    // ... your code goes here
    
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback()
      }
     }, 1000);


}
   
  
   // Store the timeoutId in the class instance


  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime - this.getMinutes() * 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value - 10 < 0){
      return `0${value.toString()}`
    }
    else {
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
