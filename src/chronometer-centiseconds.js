class Chronometer {
  constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goe
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime % 6000) / 100);
    return seconds;
    // ... your code goes here
  }

  getCentiseconds() {
      let centiseconds = (this.currentTime - this.getMinutes() * 6000) % 100;
      return centiseconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
     if (value < 10) {
       return `0${value}`;
     } else {
       return `${value}`;
     }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
    // ... your code goes here
  }
}
