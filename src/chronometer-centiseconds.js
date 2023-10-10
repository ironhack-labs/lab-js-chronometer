class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++; 
      
      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  } 

  getSeconds() {
    return (this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    const seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    const centiSec = this.computeTwoDigitNumber(Math.floor(this.getCentiseconds(this.currentTime)));
    return `${minutes}:${seconds}.${centiSec}`;
  }
}