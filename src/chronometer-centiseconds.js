class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;;
      if (printTimeCallback instanceof Function) printTimeCallback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if ((value.length === 1)) return '0' + value;
    else return value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes().toString());
    let seconds = this.computeTwoDigitNumber(this.getSeconds().toString());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds().toString());

    return minutes + ':' + seconds + ":" + centiseconds;
  }
}
