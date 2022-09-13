class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId= null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  } 

  getSeconds() {
    const seconds = this.currentTime % 60;
   return Math.floor(seconds);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } if (value>=10){
      return `${value}`;
    }
    
  }

  stop() {
 clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
