class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  // Bonus Iteration 9: Centiseconds
  start(printTimeCallback) {
    // SOLUTION (Seconds Only):
    // this.intervalId = setInterval(() => {
    //   this.currentTime++;
    //   if (printTimeCallback) printTimeCallback();
    // }, 1000);

    // SOLUTION (With Centiseconds):
    this.intervalId = setInterval(() => {
      if (printTimeCallback) printTimeCallback();
      this.currentTime++;
    }, 10);
  }

  getMinutes() {
    // SOLUTION (Seconds Only):
    // return Math.floor(this.currentTime / 60);
    // SOLUTION (With Centiseconds):
    return Math.floor(this.currentTime / 6000); // Bonus Iteration 9: Centiseconds
  }

  getSeconds() {
    // SOLUTION (Seconds Only):
    // return this.currentTime % 60;
    // SOLUTION (With Centiseconds):
    return Math.floor(this.currentTime / 100) % 60; // Bonus Iteration 9: Centiseconds
  }

  getCentiseconds() {
    // SOLUTION (With Centiseconds):
    return this.currentTime % 100; // Bonus Iteration 9: Centiseconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
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
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
