class Chronometer {
  constructor() {
    this.startTime = 0;
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    /* Delta Time Correction: Instead of relying on the interval to be exactly 10 milliseconds, 
    We record the actual timestamp when the start method is called and calculate the difference 
    in time each time the interval runs. This would help correct any drift over time.
    I added this after seeing noticebale difference between the exampel and the test .
    */
    const updateFrequency = 10; // Milliseconds for each centisecond.
    this.startTime = Date.now() - this.currentTime * updateFrequency;


    this.intervalId = setInterval(() => {
      const elapsedTime = Date.now() - this.startTime;
      this.currentTime = Math.floor(elapsedTime / updateFrequency);

      if (printTimeCallback) {
        printTimeCallback(); // Call the printTimeCallback function if it exists.
      }
    }, updateFrequency);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100 / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).padStart(2, "0");
    // OR :
    // return ("0" + value).slice(-2);
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
    console.log(`${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}:${this.computeTwoDigitNumber(this.getCentiseconds())}`);

    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
    

  }
}
