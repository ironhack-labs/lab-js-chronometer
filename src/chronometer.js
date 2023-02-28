class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let remainingSecs = this.currentTime % 60;
    return remainingSecs;
  }

  computeTwoDigitNumber(value) {
    const strValue = value.toString();
    const formattedNum = ('0' + strValue).slice(-2);
    return formattedNum;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let splitStr = `${minutes}:${seconds}`;
    return splitStr;
  }
}
