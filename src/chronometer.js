class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback() !== undefined) {
        printTimeCallback();
      }
    }, 1000);

    const intervalId2 = setInterval(() => {
      this.currentTime += 3;
    }, 3000);

    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value.length === 1) {
      return `0${value}`;
    } else {
      return `${value}`;
    }

    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let minutes = this.computerTwoDigitNumber.slice;
    let 
    // ... your code goes here
  }
}
