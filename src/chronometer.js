class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {

  }

  getCentisecond() 

  computeTwoDigitNumber(value) {
    const string = "00";

    if (value === 0) return '00';
    if (value < 10) return '0' + `${value}`;

    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}