class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = null;
  }

  start(printTimeCallback) {
    let id = setInterval(function () {
      this.currentTime++;
      printTimeCallback();
    }, 1000);

    this.intervalID = id;
  }

  getMinutes() {
    let totalMinutes = this.currentTime / 60;
    this.totalMinutes = totalMinutes;
    return Math.floor(totalMinutes);
  }

  getSeconds() {
    let secondsLeft = this.currentTime % 60;
    return secondsLeft;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalID);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return ""; 
  }

}
