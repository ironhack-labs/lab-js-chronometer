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
      if(printTimeCallback){
      printTimeCallback(this.currentTime);
      }
      },1000);
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  getCentiseconds(){
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value >= 0 && value < 10){
      return `0${value}`;
    }
    else {
      return `${value}`;
    }
    
  }

  stop() {
    // ... your code goes here
    clearInterval (this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let currentSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${currentMinutes}:${currentSeconds}`;  
  }
}

