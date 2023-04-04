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
      } else {
        return;
      }
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 100 / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = Math.floor(this.currentTime % 100);
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    let twoDigitsStr = value.toString();
    if (twoDigitsStr.length < 2) {
      return twoDigitsStr.padStart(2, "0");
    } else {
      return twoDigitsStr;
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

    console.log(`${minutes}:${seconds}.${centiseconds}`);
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
