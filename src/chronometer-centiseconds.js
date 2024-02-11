class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (!printTimeCallback || typeof printTimeCallback !== "function") {
      printTimeCallback = () => {};
    }
    const intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback(this.currentTime);
    }, 10);
    this.intervalId = intervalId;
  }

  setInterval() {
    const intervalId = setInterval(callbackFunction, delay);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000)/100);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    let newStr = value.toString();
    if (newStr.length === 1) {
      return "0"+newStr;
    }
    else if (newStr.length === 2) {
      return newStr;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let timeSplit = this.computeTwoDigitNumber(this.getMinutes()).toLowerCase() + ":" + this.computeTwoDigitNumber(this.getSeconds()).toLowerCase() + "." + this.computeTwoDigitNumber(this.getCentiseconds()).toUpperCase();
    return timeSplit;
  }
}
