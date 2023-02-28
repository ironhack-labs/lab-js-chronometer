class Chronometer { 
    constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (!printTimeCallback) {
      printTimeCallback = () => {}; 
    }

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback();
    }, 1000);
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
   return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? "0" + value : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
