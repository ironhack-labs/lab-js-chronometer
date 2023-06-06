class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (this.intervalId === null) {
      this.interval = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback) {
          printTimeCallback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
    let time = this.currentTime;
    return Math.floor(time / 60);
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }
    let currentTime = this.currentTime;
    let seconds = currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let padding = 0;
    if (value >= 10) {
      return value.toString();
    }
    let stringPadding = padding.toString();
    let valueString = value.toString();
    return stringPadding + valueString;
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
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
