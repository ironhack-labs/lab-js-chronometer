class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.centiseconds = 0; 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.centiseconds += 10; 
      if (printTimeCallback) printTimeCallback();
    }, 10); 
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getCentiseconds() {
    return Math.floor((this.centiseconds % 1000) / 10); 
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.centiseconds = 0; 
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds()); // centisecondsをフォーマット
    return `${minutes}:${seconds}:${centiseconds}`; 
}
