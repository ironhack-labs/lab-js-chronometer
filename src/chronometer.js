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
      if (printTimeCallback) { printTimeCallback(); }

    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      const valueStr = `0${value.toString()}`;
      return valueStr;
    } else {
      return value.toString();
    }
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
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const minStr = this.computeTwoDigitNumber(minutes);
    const secStr = this.computeTwoDigitNumber(seconds);

    const gotMinAndSec = `${minStr}:${secStr}`;
    return gotMinAndSec;
  }
}
