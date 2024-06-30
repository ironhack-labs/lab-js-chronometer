class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (this.intervalId !== null) return;

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback(this.currentTime);
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    // console.log(Math.floor(this.getSeconds() / 60));
    return Math.floor(this.currentTime / 100 / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
  }
  getCentiseconds() {
    // ... your code goes here
    //console.log(this.currentTime);
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ? `0${value}` : value.toString();
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
    console.log(
      `${this.computeTwoDigitNumber(
        this.getMinutes()
      )}:${this.computeTwoDigitNumber(
        this.getSeconds()
      )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
    );

    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
