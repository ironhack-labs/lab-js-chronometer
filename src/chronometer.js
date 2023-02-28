class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  // another way of doing it
  //return Math.floor(this.currentTime / 60);

  getSeconds() {
    const seconds = this.currentTime % 60;
    return Math.floor(seconds);
  }

  computeTwoDigitNumber(value) {
    if (value.length < 10) {
      return null;
    } else {
      return value.toString();
    }
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
