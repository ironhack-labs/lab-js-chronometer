// Comment in and out scripts for test on Iteration 9!

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
      if (typeof printTimeCallback === "function") printTimeCallback();
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    // ... your code goes here
    if (this.currentTime > 0) {
      return this.currentTime % 100;
    } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringNum = value.toString();
    if (stringNum.length < 2) stringNum = "0" + stringNum;
    return stringNum;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return minutes + ":" + seconds + "." + centiSeconds;
  }
}
