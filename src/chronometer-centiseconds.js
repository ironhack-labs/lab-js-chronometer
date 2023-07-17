class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = this.currentTime % 100;
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    let svalue = value.toString();
    if (svalue.length === 1) {
      return "0" + svalue;
    } else if (svalue.length === 2) {
      return svalue;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
