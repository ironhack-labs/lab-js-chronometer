class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback(this.currentTime);
      }, 10);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 10);
    }
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
    let printMins = this.getMinutes();
    let printSecs = this.getSeconds();
    let printCentisecs = this.getCentiseconds();
    return `${computeTwoDigitNumber(printMins)}:${computeTwoDigitNumber(printSecs)}.${printCentisecs}`;
  }
}
