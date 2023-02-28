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
      printTimeCallback ? printTimeCallback() : "";
      // console.log(this.currentTime);
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

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().length <= 1 ? `0${value}` : `${value}`;
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
    const minutes = this.getMinutes(this.currentTime);
    const seconds = this.getSeconds(this.currentTime);
    const result = `${this.computeTwoDigitNumber(
      minutes
    )}:${this.computeTwoDigitNumber(seconds)}`;
    return result;
  }
}
