class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
      if(printTimeCallback !== undefined) printTimeCallback();
    },10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime/100)%60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime%100);
  }

  computeTwoDigitNumber(value) {
    return (value.toFixed(0).length === 1) ? "0"+value.toFixed(0) : value.toFixed(0);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}.${this.computeTwoDigitNumber(this.getCentiseconds(this.currentTime))}`
  }
}
