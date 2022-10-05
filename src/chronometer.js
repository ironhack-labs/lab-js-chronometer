class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    let intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let mins = Math.floor(this.currentTime / 60);
    return mins;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? "0" + value : value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval();
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
