class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    // if (printTimeCallback) {
    //   printTimeCallback();
    // }

    this.intervalId = setInterval(() => {
      this.currentTime++
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

    let stringValue = value.toString();
    if (stringValue.length == 1) {
      return "0" + stringValue;
    } else if (stringValue.length == 2) {
      return stringValue;
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
