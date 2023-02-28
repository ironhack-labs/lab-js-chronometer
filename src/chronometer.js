class Chronometer {
  constructor() {
    this.currentTime = 0.000;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback ? printTimeCallback() : " ";
  }, 1000);
} 

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0.000;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(Math.floor(this.currentTime / 60));
    const seconds = this.computeTwoDigitNumber(this.currentTime % 60);
    return `${minutes}:${seconds}`;
  }
}
