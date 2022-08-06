class Chronometer {
  getCentiseconds() {
    return Math.floor(this.currentTime%100);
  }

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {

    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime/100)%60);
  }

  computeTwoDigitNumber(value) {
    return ("00" + value).slice (-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min=this.computeTwoDigitNumber(this.getMinutes());
    let sec=this.computeTwoDigitNumber(this.getSeconds());
    let cSec=this.computeTwoDigitNumber(this.getCentiseconds());
    return `${min}:${sec}.${cSec}`;
  }

}
