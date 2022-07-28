class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.IntervalId = setInterval(() => {
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  getCentiseconds() {
    let centiSecDec = (this.currentTime % 60) * 100;
    // console.log(centiSecDec);
    return centiSecDec;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strValue = String(value);
    if (strValue.length === 2) {
      return strValue;
    } else {
      return "0" + strValue;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.IntervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    console.log(this.currentTime);
    let minutes = this.currentTime / 60;
    let seconds = this.currentTime % 60;

    return `${String(this.computeTwoDigitNumber(Math.floor(minutes)))}:${String(
      this.computeTwoDigitNumber(seconds)
    )}`;
  }
}
