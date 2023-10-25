class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code her
    console.log(this.currentTime);
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (!printTimeCallback) {
        return;
      }
      printTimeCallback(this.currentTime);
    }, 10);
    return this.currentTime;
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here

    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    // ... your code goes here

    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value;
    }
    return String(value);
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
    const theMinutes = this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    );
    const theSeconds = this.computeTwoDigitNumber(
      this.getSeconds(this.currentTime)
    );
    const theCentiseconds = this.computeTwoDigitNumber(
      this.getCentiseconds(this.currentTime)
    );
    return `${theMinutes}:${theSeconds}.${theCentiseconds}`;
  }
}
