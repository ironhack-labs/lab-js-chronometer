class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString().slice(-2);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.running = false;
  }

  reset() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
    this.running = false;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return this.computeTwoDigitNumber(minutes) + ":" + this.computeTwoDigitNumber(seconds);
  }
}
