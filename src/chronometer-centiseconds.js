class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) printTimeCallback();
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime/100);
    return seconds % 60;
  }

  getCentiseconds() {
   return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length === 1) return `0${value.toString()}`
    else return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mins = this.getMinutes();
    let secs = this.getSeconds();
    let centiSecs = this.getCentiseconds()
    return `${this.computeTwoDigitNumber(mins)}:${this.computeTwoDigitNumber(secs)}.${this.computeTwoDigitNumber(centiSecs)}`

  }
}
