class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
  
      if(printTimeCallback){
        printTimeCallback();
      }
      }, 10);
  }

  getMinutes() {
    this.currentTime;
    return Math.floor(this.currentTime / 6000); 
  }

  getSeconds() {
    this.currentTime;
     return Math.floor((this.currentTime)/100 % 60);
  }

  getCentiseconds() {
    this.currentTime;
    return Math.floor((this.currentTime)/1000);
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return `0${value}`
    } else {
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
    return`${this.computeTwoDigitNumber(this.getMinutes())}`+ ":" + `${this.computeTwoDigitNumber(this.getSeconds())}`+ ":" + `${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
