class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if (printTimeCallback != undefined) {
        printTimeCallback();
      }
    },10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 6000 / 100);
  }

  getCentiseconds() {
    return this.currentTime % 6000 % 100;
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) {
      return value.toString();
    } else {
      return "0" + value;
    }
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
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return(`${minutes}:${seconds}.${centiseconds}`)
  }
}
