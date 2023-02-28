class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(typeof printTimeCallback === "function"){
        printTimeCallback();
      }
    }, 10);

  }

  getMinutes() {
    const min = Math.floor(this.currentTime / 6000);
    return min;
  }

  getSeconds() {
    const sec = Math.floor((this.currentTime / 100) % 60);
    return sec;
  }
  
  getCentiseconds() {
    const centSec = Math.floor(this.currentTime - (this.getSeconds() * 100) - (this.getMinutes() * 6000));
    return centSec;
  }

  computeTwoDigitNumber(value) {

    let valueStr = value.toString();
    
    if(valueStr.length === 1){
      valueStr = "0" + valueStr;
    }

    return valueStr;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    const centSec = this.computeTwoDigitNumber(this.getCentiseconds());
    const result = min + ":" + sec + "." + centSec;

    return result;

  }
}
