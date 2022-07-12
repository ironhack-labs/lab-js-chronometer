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
      }, 10); 
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime/6000);
    return minutesPassed;
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime/100) % 60; /* it's always an enteger */
    return seconds;
  }

  getCentiseconds() {
    const centiSeconds = this.currentTime % 100; /* it's always an enteger */
    return centiSeconds;
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
   const stringCentisec = this.computeTwoDigitNumber(this.getCentiseconds());  
   return `${stringMinutes}:${stringSeconds}.${stringCentisec}`;
  }
}
