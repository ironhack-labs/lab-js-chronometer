class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.startInterval = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
      
    }, 1000);
  }

  getMinutes() {
    if(this.currentTime === 0){
      return 0;
    }
    else if(this.currentTime > 0){
      return Math.floor(this.currentTime / 60)
    }
  }

  getSeconds() {
    if(this.currentTime === 0){
      return 0;
    }
    else if(this.currentTime > 0){
      return Math.floor(this.currentTime % 60)
    }
  }

  computeTwoDigitNumber(value) {
    if(value <= 9){
      return (`0${value}`);
    }
    else if(value > 9){
      return(`${value}`);
    }
  }

  stop() {
    let watchInterval = this.startInterval;
    clearInterval(watchInterval);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minStr = this.computeTwoDigitNumber(this.getMinutes());
    const secStr = this.computeTwoDigitNumber(this.getSeconds());
    return minStr + ":" + secStr;
  }
}
