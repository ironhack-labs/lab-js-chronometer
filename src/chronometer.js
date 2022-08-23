class Chronometer {
  constructor() {
        this.currentTime = 0;
        this.intervalId = null;
  }

  start(printTimeCallback) {
   this.intervalId = setInterval(() => {
      if (arguments.length) {
        printTimeCallback()
      }
      this.currentTime++; 
    }, 1000);  
  } 

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() { 
   clearInterval(this.intervalId); 
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
