class Chronometer {
  currentTime = 0;
  intervalId = null;
  constructor() {}

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 10);
    // printTimeCallback(); // That should be working, right? But debugger says printTimeCallback is not a function...
    //   // I found the answer in the description of the V1 lab "If no callback is passed, it should be disregarded
    //   // (hint: you should check whether if the callback was passed before attempting to run it)."
  }

  getMinutes() {
    return this.currentTime < 6000 ? 0 : Math.floor(this.currentTime / 6000);
    // Sure, unnecessary - Math.floor !== Math.round
    // return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return this.currentTime < 100 ? 0 : Math.floor((this.currentTime % 6000) / 100);
    // return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    const string = value.toString();
    return string.length === 2 ? string : "0" + string;
    // very nice: return value.toString().padStart(2,"0");
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
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
