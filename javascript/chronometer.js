/*class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      };
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if (value === 0) {
      return "00"
    }
    else if (value.toString().length === 1) {
      return `0${value}`
    }  
    else {
      return value.toString()
    };
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
*/

// ******* Iteration 9 *********

 class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
    this.millisecondsId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      };
    },1000);

    this.millisecondsId = setInterval(() => {
      if (this.milliseconds>1000) {
        this.milliseconds = 0;
      };
      this.milliseconds++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    },1);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  getMilliseconds() {
    return this.milliseconds;
  }

  computeTwoDigitNumber(value) {
    if (value === 0) {
      return "00"
    }
    else if (value.toString().length === 1) {
      return `0${value}`
    }  
    else {
      return value.toString()
    };
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsId);
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
