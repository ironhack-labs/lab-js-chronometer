class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  //Iteration 2: The start method
  start(printTimeCallback) {
    
    
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.round(this.currentTime % 60);
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
