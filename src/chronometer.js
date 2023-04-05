class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = null;
  }
 
  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
  }
  getMinutes() {
   return Math.floor(this.currentTime/60);
  }

  getSeconds() {
  return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
   clearInterval(this.intervalID);
   this.intervalID = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
