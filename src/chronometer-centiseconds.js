class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  
  }

  start(printTimeCallback) {
    // ... your code goes here    
this.intervalId = setInterval(() => {
   
      this.currentTime++;
      if
    (printTimeCallback) printTimeCallback();
  }, 10);
  
  }


  getMinutes() {
    // ... your code goes here
    return typeof Number ? Math.floor(this.currentTime / 6000): 0;
    //: this.currentTime.minutes.toString().padStart(2, "0");
  }

  getSeconds() {
    // ... your code goes here
   return Math.floor(this.currentTime / 100) % 60;

  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, "0");
  }

  stop() {
    // ... your code goes here
   
    clearInterval(this.intervalId);
    this.intervalId = null;
    


  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
