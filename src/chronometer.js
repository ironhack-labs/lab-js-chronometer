class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime); // This should now log the time every second

      // Check if printTimeCallback is provided and is a function before calling it
      if (printTimeCallback && typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  getMinutes() {
    // Method implementation here
  }

  getSeconds() {
    // Method implementation here
  }

  computeTwoDigitNumber(value) {
    // Method implementation here
  }

  split() {
    // Method implementation here
  }
}
