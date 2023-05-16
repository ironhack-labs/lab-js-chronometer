class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    setInterval(() => {
      return this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here

    return this.currentTime % 60;
  }

  computeTwoDigitNumber(number) {
    // ... your code goes here
    return number > 9 ? "" + number : "0" + number;
  }

  stop() {
    // ... your code goes here
    clearInterval(null);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
