class Chronometer {
  constructor() {
    // ... your code goes here
    constructor() {
      // ... your code goes here
      this.currentTime = 0;
      this.intervalId = null;
  }
  }
  start(Callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (Callback) {
        callback();
      }
    },1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime & 60);
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? `0${value}`: `0${value}` : `${value}`;
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getMinutes());
    const cemtiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${seconds}`;
  }
}
if (typeof module !== `undefined`) {
  module.exports = Chronometer;
  
}
