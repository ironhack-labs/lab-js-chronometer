class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
 

  start(printTimeCallback) {
    if (typeof printTimeCallback === 'function') {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const stringVal = value.toString();
     if (stringVal.length === 1) {
      return '0' + stringVal;
     }
     return stringVal
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
