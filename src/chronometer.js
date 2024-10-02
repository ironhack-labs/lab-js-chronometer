class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  
  }

  start(printTimeCallback){
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    },1000)
    
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    let resultMinutes = Math.floor(minutes);
    return resultMinutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
      
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
