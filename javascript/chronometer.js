class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback == 'function') {
      printTimeCallback(); 
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId);
  }
  
  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let minutesDigit = this.computeTwoDigitNumber(minutes);
    let secondsDigit = this.computeTwoDigitNumber(seconds);
    return minutesDigit + ":" + secondsDigit;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
