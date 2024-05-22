class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  
    // ... your code goes here
  }

  start(printTimeCallback) {
   
    this.intervalId = setInterval(() => {
      this.currentTime++; 
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 1000)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
   return value.toString().padStart(2, '0');
   

  }


  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  } 
}
