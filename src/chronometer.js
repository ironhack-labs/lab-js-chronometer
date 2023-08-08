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

      if (typeof printTimeCallback === "function") {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let rawMinutes = this.currentTime / 60;
    return Math.floor(rawMinutes);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      let singleDigitString = value.toString();
      let twoDigitNumber = "0" + singleDigitString;
      return twoDigitNumber;
    } else {
      return value.toString();
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
    return (
      this.computeTwoDigitNumber(this.getMinutes()).toString() +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds()).toString()
    );
  }
}
