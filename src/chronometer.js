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
    }, 1000);
    this.intervalId = intervalId;
  }

  setInterval() {
    const intervalId = setInterval(callbackFunction, delay);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
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
    let timeSplit = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
    return timeSplit;
  }
}
