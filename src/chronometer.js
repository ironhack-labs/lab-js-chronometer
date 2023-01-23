class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) printTimeCallback();
      
      
      
    }, 1000)

    /* setInterval(printTimeCallback, 1000) */

    
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    
    if(value > 9) return value.toString();
    else return `0${value}`;
      
    
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
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
