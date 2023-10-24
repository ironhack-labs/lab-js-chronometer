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
    if (this.currentTime === 0) {
      return 0;
    }
    let min = Math.floor(this.currentTime / 6000);
    return min;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let sec = Math.floor(this.currentTime / 100) % 60;
    return sec;
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let cSec = this.currentTime % 100;
    return cSec;
  }

  computeTwoDigitNumber(value) {
    let twoDigi = value.toString();

    if (twoDigi.length === 1) {
      return "0" + twoDigi;
    }
    if (twoDigi.length !== 2) {
      return "00";
    }
    return twoDigi;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let spM = this.computeTwoDigitNumber(this.getMinutes()).toString();
    let spS = this.computeTwoDigitNumber(this.getSeconds()).toString();
    let spC = this.computeTwoDigitNumber(this.getCentiseconds()).toString();

    return spM + ":" + spS + ":" + spC;
  }
}
