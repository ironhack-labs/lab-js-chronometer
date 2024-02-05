class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    let intervalId = () => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
      console.log(this.currentTime);
    };
    this.intervalId = setInterval(intervalId, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    let totalSeconds = this.currentTime / 100;

    if (totalSeconds >= 60) {
      return totalSeconds % 60;
    } else {
      return parseInt(totalSeconds);
    }
  }
  getCentiseconds() {
    let seconds = this.currentTime / 100;
    seconds = seconds - Math.floor(seconds);
    return  parseInt(seconds.toFixed(2) * 100);
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    console.log(this.intervalId);
    clearInterval(this.intervalId);
    console.log(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
