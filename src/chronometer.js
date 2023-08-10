class Chronometer {
  currentTime = 0;
  intervalId = null;
  constructor() {}

  start(printTimeCallBack) {
    setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallBack === "function") {
        printTimeCallBack();
      }
    }, 1000);
  }

  getMinutes() {
    const min = Math.floor(this.currentTime) / 60;
    return +min.toFixed(0);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      value = "0" + value;
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    let sec = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    //let shortMin = computeTwoDigitNumber(min);
    //let shortSec = computeTwoDigitNumber(sec);
    let formatted = min + ":" + sec;
    //computeTwoDigitNumber(this.currentTime);
    return formatted;
  }
}
