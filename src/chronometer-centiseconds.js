class Chronometer {
  constructor() {
    this.currentTime = 0; // this is in centiseconds now
    this.intervalId = null;
  }
  //setInterval(function () {element.innerHTML += "Hello"}, 1000);
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
    return this.intervalId;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor((this.currentTime / 100) % 60);
    }
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
    this.currentTime = 0;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    )}:${this.computeTwoDigitNumber(
      this.getSeconds(this.currentTime)
    )}.${this.computeTwoDigitNumber(this.getCentiseconds(this.currentTime))}`;
  }
}
