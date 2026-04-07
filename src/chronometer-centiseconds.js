class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
      this.currentTime += 10;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
   return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 1000)) % 60;
  }

  getCentiseconds() {
    return Math.floor((this.currentTime % 1000) / 10);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2 , "0");
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}

