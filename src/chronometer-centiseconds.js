class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100 % 60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    if (value < 10 && value >= 0) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
    // const twoString = (digit) => {
    //   if(digit.length===1) {
    //     return "0"+digit.slice(0)
    //   } else {
    //     return digit
    //   }
    // }
    // return twoString(String(value));
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
