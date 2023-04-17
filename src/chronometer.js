class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()},1000)
  }

  getMinutes() {
     return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime) % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stop() {
  let watchInterval = this.intervalId;
  clearInterval(watchInterval);
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    return mins + ":" + secs;
  }
  }