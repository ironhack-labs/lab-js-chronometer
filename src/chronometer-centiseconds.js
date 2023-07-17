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
      },10);
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime/100) % 60);
  }
  getCentiseconds(){
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if(value >= 0 && value < 10){
      return `0${value}`;
    }
    else if(value >= 10){
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
    let currentCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${currentMinutes}:${currentSeconds}.${currentCentiseconds}`;
  }
}

