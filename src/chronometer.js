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
      if(typeof printTimeCallback === "function") {
        printTimeCallback(this.currentTime);
      }
    }, 1000);

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
    const valueToString = value.toString();
    if (valueToString.length < 2) {
      return `0${valueToString}`;
    } else {
      return valueToString;
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
  }
}
