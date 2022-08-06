class Chronometer {
  currentTime = 0;
  intervalId = null;
  constructor() {}

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 10);
  }

  getMinutes() {
    return this.currentTime < 6000 ? 0 : Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return this.currentTime < 100 ? 0 : Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    const string = value.toString();
    return string.length === 2 ? string : "0" + string;
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
    // console.log(`${minutes}:${seconds}:${centiSeconds}`);
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
