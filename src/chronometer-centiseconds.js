class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    //should increment by 1 the currentTime property every 1 second

    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback(this.intervalId);
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) return 0;
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here

    let noMinutes = this.currentTime / 6000 - this.getMinutes();
    let seconds = 0;

    if (this.currentTime >= 6000) {
      seconds = Math.round(60 * noMinutes);
      return seconds;
    }

    if (this.getMinutes() === 0) {
      seconds = Math.floor(this.currentTime / 100);
      return seconds;
    }
  }
  getCentiseconds() {
    // ... your code goes here
    if (this.currentTime === 0) return 0;
    let centiSeconds = 0;
    let noMinutes = this.currentTime / 6000 - this.getMinutes();
    let noSeconds = noMinutes * 60 - this.getSeconds();
    let noSeconds2 = (this.currentTime / 100 - this.getSeconds()) * 100;

    if (this.currentTime >= 6000) {
      centiSeconds = Math.round(noSeconds * 100 - noSeconds);
      return centiSeconds;
    }

    if (this.currentTime >= 100 && this.currentTime < 6000) {
      centiSeconds = Math.round(noSeconds2);
      return centiSeconds;
    }
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    // ... your code goes here
    let convertedNum = value.toString();
    if (convertedNum.length === 1) {
      return `0${value}`;
    } else if (convertedNum.length === 2) {
      return `${value}`;
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

    let split = `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
    return split;
  }
}
