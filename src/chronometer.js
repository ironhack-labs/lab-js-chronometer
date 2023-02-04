class Chronometer {
  constructor() {
    // ... your code goes here
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}
