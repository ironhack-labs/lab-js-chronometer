class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.id = undefined;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.id = setInterval(() => {
      this.currentTime++;
    }, 1_000);

    if(printTimeCallback !== undefined) {
      this.id = setInterval(() => {
        printTimeCallback();
      }, 1_000);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.id);
  }

  reset() {
    // ... your code goes here
    this.stop();
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
