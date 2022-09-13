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
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = ("0" + value).slice(-2);
    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let fourDigitNumber = ('0' + Math.floor(this.currentTime/60)).slice(-2) + ':' + ('0' + Math.floor(this.currentTime % 60)).slice(-2);
  return fourDigitNumber;
  }
}
