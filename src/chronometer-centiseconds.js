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
    }, 10);
    if (printTimeCallback)
      this.intervalId = setInterval(() => {
        printTimeCallback();
      }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    if (!this.currentTime) return 0;
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    // ... your code goes here
    if (!this.currentTime) return 0;
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringValue = String(value);
    if (stringValue.length == 1) return 0 + stringValue;
    else return stringValue;
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
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds()) +
      "." +
      this.computeTwoDigitNumber(this.getCentiseconds())
    );
  }
}
