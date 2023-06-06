class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback) {
          printTimeCallback();
        }
      }, 1000);
    }
  }

  // ---------------------------------------------------------
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  // Output: 0 (when the chronometer hasn't been started)

  // ------------------------------------------------------------------
  getSeconds() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime - minutes * 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value.toString(); // Add leading zero for single-digit values
    } else {
      return value.toString(); // Convert the value to a string
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }
  // Example usage

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let minutes = Math.floor(this.currentTime / 60); // Get the whole minutes
    let seconds = this.currentTime % 60; // Get the remaining seconds

    let formattedTime =
      this.computeTwoDigitNumber(minutes) +
      ":" +
      this.computeTwoDigitNumber(seconds); // Format the time as "mm:ss"
    return formattedTime;
  }
}
