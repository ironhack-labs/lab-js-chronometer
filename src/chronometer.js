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
    }, 1000);
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
}
}
