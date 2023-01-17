class Chronometer {
  constructor() {
    // ... your code goes here
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? "0" + value : String(value);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here

    this.reset = this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
