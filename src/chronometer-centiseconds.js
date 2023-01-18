class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 10);
    if (printTimeCallback) {
      setInterval(() => {
        for (let i = 0; i < 100; i++) {
          printTimeCallback();
        }
      }, 1000);
    }
    // ... your code goes here
  }

  getMinutes() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime / 6000);

    // ... your code goes here
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return Math.floor((this.currentTime / 100) % 60);
    // ... your code goes here
  }

  getCentiseconds() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime % 100);
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
    // ... your code goes here
  }
}
