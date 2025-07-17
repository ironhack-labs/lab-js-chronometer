class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let centiSeconds = this.getCentiseconds();
    let twoDigitMinutes = this.computeTwoDigitNumber(minutes);
    let twoDigitSeconds = this.computeTwoDigitNumber(seconds);
    let twoDigitCentiSeconds = this.computeTwoDigitNumber(centiSeconds);
    return `${twoDigitMinutes}:${twoDigitSeconds}.${twoDigitCentiSeconds}`;
  }
}
