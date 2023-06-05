class Chronometer {
  currentTime = 0;
  intervalId = null;

  constructor() {
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    const numberString = value.toString();

    if (numberString.length === 1) {
      return "0" + numberString;
    } else if (numberString.length === 2) {
      return numberString;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    // this.intervalId = null;
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

// setInterval(this.currentTime++, 1000);
