class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.IntervalId = setInterval(() => {
      printTimeCallback();
      this.currentTime += 1;
    }, 1000);
    console.log(this.IntervalId);
  }

  getMinutes() {
    // ... your code goes here
    let minute = Math.floor(this.current / 60);
    return minute.toFixed();
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    // let centiSecDec = this.currentTime & 60 * 100;
    return centiSecDec;
  }
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
  }
}
