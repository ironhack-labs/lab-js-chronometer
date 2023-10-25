class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, "0");
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    return this.currentTime;
  }

  split() {
    // ... your code goes here
    this.currentTime.split(" ");
  }
}
