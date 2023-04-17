class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
      this.intervalId = setInterval(() => {
          this.currentTime++;
          if (printTimeCallback) {
            printTimeCallback();
          }
      }, 10);
    }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor((this.currentTime/100)%60);
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime%100);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString.length===1){
      return value.toString().padStart(2,"0");
    }
    return value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
      return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
