class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    if (this.currentTime > 60) {
      return this.currentTime % 60;
    }
    else return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length < 2) return `0${valueString}`;
    else return valueString;
  }

  stop() {
    return clearInterval(intervalId);
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
