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
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds(){
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = "0" + String(value);
    if (value >= 10) {
      twoDigitNumber = twoDigitNumber.slice(1, 3);
    }
    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let SS = this.computeTwoDigitNumber(this.getCentiseconds());

    return mm + ":" + ss + "." + SS;
  }
}
