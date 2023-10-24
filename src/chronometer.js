class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.minutes = 0;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
      if(this.currentTime % 60 === 0){
        this.minutes++;
      }
      
    },1000);
    
  }

  getMinutes() {
    return this.minutes;
  }
  getSeconds() {
    // ... your code goes here
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

const chronometer = new 

chronometer();
chronometer.start();
