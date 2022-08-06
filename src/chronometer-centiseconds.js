class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback){
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if (printTimeCallback) {
          printTimeCallback()
        } 
      }, 10);
  }  

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 6000) % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2,"0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitMin = this.computeTwoDigitNumber(this.getMinutes());
    let splitSec = this.computeTwoDigitNumber(this.getSeconds());
    let splitCen = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${splitMin}:${splitSec}.${splitCen}`;
  }
}
