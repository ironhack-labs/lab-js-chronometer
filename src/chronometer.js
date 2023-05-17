class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    return this.currentTime ++;
    printTimeCallback();
    }, 1000);
  }
  
  

  getMinutes() {
    if (this.currentTime > 0){
    return Math.floor(this.currentTime / 60);
    }
    else {
      return 0;
    }
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
    return "0" + value;
    }
    else {
      return value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return getMinutes() + ":" + getSeconds();
  }
  
  /*  
  split() {
    return this.getMinutes() + ":" + this.getSeconds();
  }

  tried my luck with both options, but none of them worked...
  */
}
