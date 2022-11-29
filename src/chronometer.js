class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }
  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
      this.currentTime += 1;
    }, 1 * 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime - Math.floor(this.currentTime / 60) * 60;
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }
  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    //this.reset();
    //this.intervalId = null;
  }
  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }
  split() {
    let split = computeTwoDigitNumber(getMinutes());
    computeTwoDigitNumber(getSeconds());
    return split;
  }
}
