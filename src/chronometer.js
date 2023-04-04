class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    //Interval that runs the function once per second
    this.intervalId = setInterval(
      () => {
        // Increment the current time by 1
        this.currentTime += 1;
        // If the callback function is passed as an argument, call it
        if (printTimeCallback) {
          printTimeCallback();
        }
        // If the callback function is not passed as an argument, do nothing
      },
      // The interval is 1 second
      1000
    );
  }

  getMinutes() {
    //Returns the current time from the chronometer object divided by 60
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // Divides the current time by 60 and returns the remainder
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString();

    // If the string has only one character add a 0 in front
    if (valueString.length === 1) {
      return "0" + valueString.slice();
    }
    return valueString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}
