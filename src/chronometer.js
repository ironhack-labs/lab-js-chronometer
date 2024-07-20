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
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
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
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    return split;
  }
}
