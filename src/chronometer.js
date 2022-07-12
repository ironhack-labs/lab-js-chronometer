class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (printTimeCallback) 
      printTimeCallback(); 
      }, 1000); 
      
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime/60);
    return minutesPassed;
  }

  getSeconds() {
    const seconds = this.currentTime % 60; /* it's always an enteger */
    return seconds;
    }
    
   computeTwoDigitNumber(value) {
      if (value <= 9){
      return `0${value}`;
      }

      else {
       return value.toString(); 
      }
    }
  

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
   const stringMinutes = this.computeTwoDigitNumber(this.getMinutes()); 
   const stringSeconds = this.computeTwoDigitNumber(this.getSeconds());  
   return `${stringMinutes}:${stringSeconds}`;
  }
}
