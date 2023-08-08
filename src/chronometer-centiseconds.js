class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 10); //1 : 1000  0.01 : ?
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    let minsInCentiseconds = this.getMinutes() * 6000;
    return Math.floor((this.currentTime - minsInCentiseconds) / 100);
  }

  getCentiseconds() {
    let minsInCentiseconds = this.getMinutes() * 6000;
    let secsInCentiseconds = this.getSeconds() * 100;
    return this.currentTime - minsInCentiseconds - secsInCentiseconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10 && value >= 0) {
      return "0" + value;
    } else {
      return "" + value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds());
    const currentCentiSeconds = this.computeTwoDigitNumber(
      this.getCentiseconds()
    );

    const formattedTime = `${currentMinutes}:${currentSeconds}.${currentCentiSeconds}`;
    return formattedTime;
  }
}
