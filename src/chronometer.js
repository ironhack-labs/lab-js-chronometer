

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback && printTimeCallback();
    }, 1000)
  }
 
  getMinutes() {
  return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
  return this.currentTime % 60;
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
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
