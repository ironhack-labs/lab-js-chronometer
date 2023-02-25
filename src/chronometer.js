class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  //setInterval(function () {element.innerHTML += "Hello"}, 1000);
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
    return this.intervalId;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes(this.currentTime)
    )}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
  }
}
