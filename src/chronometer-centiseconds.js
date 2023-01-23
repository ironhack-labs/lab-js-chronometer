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
      
      
      
    }, 10)

  

  }

  
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 100) ;
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
