class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {

    this.IntervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
      printTimeCallback()};
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime > 0) {
      return Math.floor(this.currentTime / 60)
    }
    return 0;
  }

  getSeconds() {
    if (this.currentTime > 60) {
      return Math.floor(this.currentTime % 60)
    }
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (this.getSeconds + this.getMinutes === 0) {
      return value % 60;
    }
    return "00";
    
    
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
