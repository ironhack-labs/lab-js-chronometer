


class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback && printTimeCallback();
    },10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
   return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  } 

  computeTwoDigitNumber(value) {
    let digit = value.toString();
    let result = '0';

      if (digit.length < 2) {
            result += value;
    } else {
      result = digit;
    }
    return result;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}




