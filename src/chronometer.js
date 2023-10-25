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
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    const theMinutesPassed = Math.floor(this.currentTime / 60);
    return theMinutesPassed;
  }

  getSeconds() {
    // ... your code goes here
    const theSecondPassed = Math.floor(this.currentTime % 60);
    return theSecondPassed;
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
    return `${theMinutes}:${theSeconds}`;
  }
}
