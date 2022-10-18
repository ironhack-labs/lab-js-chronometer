class Chronometer {
  constructor() {
    // ... your code goes here DONE
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    if (printTimeCallback) {
      this.intervalId = setInterval(() => printTimeCallback(), 1000);
    }
  }

  getMinutes() {
    //... your code goes here

    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = value.toString();

    if (string.length < 2) {
      string = "0" + string;
      return string;
    } else {
      return string;
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
