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
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    let mins = Math.floor(this.currentTime / 60);
    return mins;
  }

  getSeconds() {
    let secs = this.currentTime % 60;
    return secs;
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
    return `${computeTwoDigitNumber(printMins)}:${computeTwoDigitNumber(
      printSecs
    )}`;
  }
}
