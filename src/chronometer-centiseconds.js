class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
     this.currentTime++;
     if(typeof printTimeCallback === 'function'){
      printTimeCallback();
     }
    }, 10)
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0;
    }else{
      return Math.floor(this.currentTime / 6000);
    }
  }

  getSeconds() {
    if(this.currentTime === 0){
      return 0;
    }else{
      return Math.floor(this.currentTime / 100);
    }
  }

  getCentiseconds() {
    if(this.currentTime === 0){
      return 0;
    }else{
      return this.currentTime % 100;
    }
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
