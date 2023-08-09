class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime+=1;
      printTimeCallback(this.currentTime);
    }, 1000);
  }

  getMinutes() {                                             // should not receive any arguments
    if (this.currentTime === 0) {                            // no division of 0
        return 0;
    }
    else {
      let minutesPassed = Math.floor(this.currentTime/60);   // should return the number of entire minutes passed
      return minutesPassed; 
    }                                   
    }

  getSeconds() {
    if (this.currentTime === 0) {                            // no division of 0
      return 0;
    } 
    else {
      return this.currentTime%60;
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value.toString()}`;   // should always return a string of length 2
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
    // ... your code goes here
  }

  }
  

let chronometer = new Chronometer();
chronometer.start(function(currentTime) {});
chronometer.getMinutes();
chronometer.getSeconds();
chronometer.computeTwoDigitNumber(8);










