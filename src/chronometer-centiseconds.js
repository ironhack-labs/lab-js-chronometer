class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return (this.currentTime % 6000) / 100;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    const string = value.toString();
    if (string.length === 1) {
      let newString = "0" + string.slice(0);
      return newString;
    } else if (string[1] === ".") {
      let newString2 = "0" + string.slice(0) + "0";
      return newString2;
    } else {
      return string;
    }
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
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    const string = `${minutes}:${seconds}`;
    return string;
  }
}
