class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.centiseconds = 0;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.centiseconds++;

      if (this.centiseconds === 100) {
        this.currentTime++;
        this.centiseconds = 0;
      }

      if (!printTimeCallback) return;

      printTimeCallback(
        this.computeTwoDigitNumber(Math.floor(this.currentTime / 60)),
        this.computeTwoDigitNumber(this.currentTime % 60),
        this.computeTwoDigitNumber(this.centiseconds)


      );

    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;

  }

  getCentiseconds() {
    return this.centiseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, '0');

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.currentTime = 0;
    this.centiseconds = 0;
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.centiseconds = 0;

  }

  split() {
    // ... your code goes here
    return (
      this.computeTwoDigitNumber(Math.floor(this.currentTime / 60)) +
      ':' +
      this.computeTwoDigitNumber(this.currentTime % 60) +
      ':' +
      this.computeTwoDigitNumber(this.centiseconds)
    );
  }
}


