class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.startTimer = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }
    else if(this.currentTime > 0){
      return Math.floor(this.currentTime/60);
    }
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0;
    }
    else if(this.currentTime > 0){
      return Math.floor(this.currentTime%60);
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value <= 9){
      return (`0${value}`);
    }
    else if (value > 9){
      return (`${value}`);
    }
  }

  stop() {
    // ... your code goes here
    let watchTimer = this.startTimer 
    clearInterval(watchTimer);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const firstString = this.computeTwoDigitNumber(this.getMinutes());
    const secondString = this.computeTwoDigitNumber(this.getSeconds());
    return firstString + ":" + secondString;
  }
}
