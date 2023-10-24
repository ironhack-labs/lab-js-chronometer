class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
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
    if (this.currentTime === 0) {
      return 0;
    }
    let min = Math.floor(this.currentTime / 60);
    return min;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let sec = this.currentTime % 60;
    return sec;
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
    
    return spM + ":" + spS; 
  }
}
