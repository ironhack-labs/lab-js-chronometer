class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    const seconds = Math.floor(this.currentTime / 100);
    return Math.floor(seconds / 60);
  }

  getSeconds() {
    // ... your code goes here
    const seconds = Math.floor(this.currentTime / 100);
    return seconds % 60;
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (typeof value !== "number") {
      return null;
    }

    let stringValue = `${value}`;
    if (stringValue.length === 1) {
      stringValue = `0${value}`;
    }

    return stringValue;
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
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
