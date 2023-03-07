class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 6000 /100);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }


  computeTwoDigitNumber(value) {
    // this.numToStr = `${value}`
    // if (this.numToStr.length === 2) {
    //   return this.numToStr;
    // }
    // else {
    //   return `0${this.numToStr}`
    // }
    // better way::
    if (value >= 10) {
      return value.toString();
    }
    return '0' + value
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
