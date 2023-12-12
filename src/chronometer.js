class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime > 0) {
      return Math.floor(this.currentTime / 60);
    }

    if (this.currentTime === 0) {
      return 0;
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }

    if (this.currentTime > 0) {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value === 0) {
      return "00";
    }

    if (value > 0 && value < 10) {
      return "0" + JSON.stringify(value);
    }

    if (value > 10) {
      return JSON.stringify(value);
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
