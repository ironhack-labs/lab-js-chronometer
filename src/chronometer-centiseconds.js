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
    }, 10);
  }

  getMinutes() {
    let mins = Math.floor(this.currentTime / 6000);
    return mins;
  }

  getSeconds() {
    let secs = Math.floor((this.currentTime % 6000) / 100);
    return secs;
  }

  getCentiseconds() {
    let centisecs = this.currentTime % 100;
    return centisecs;
  }

  computeTwoDigitNumber(value) {
    let string = value.toString();
    let finalstring;
    if (string.length === 1) {
      finalstring = `0${string}`;
    }
    if (string.length === 2) {
      finalstring = string;
    }
    return finalstring;
  }
  

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centisecs = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centisecs}`
  }
}
