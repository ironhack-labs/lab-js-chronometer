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
      }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60 / 100);
  }

  getSeconds() {
    return Math.floor(((this.currentTime / 100) % 60));
  }

  getCentiseconds() {
    return (this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if (stringValue.length === 1) {
      return '0' + stringValue;
    } else {
      return stringValue;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let twoDigitMinute = this.computeTwoDigitNumber(this.getMinutes());
    let twoDigitSecond = this.computeTwoDigitNumber(this.getSeconds());
    let twoDigitCentisecond = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${twoDigitMinute}:${twoDigitSecond}:${twoDigitCentisecond}`;
   }
  }

