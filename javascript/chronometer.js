class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
       this.intervalId = setInterval(() => {
       this.currentTime += 1;
       if (arguments.length !== 0) {
        printTimeCallback();
       }
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    let stringNum = value.toString();
if (stringNum.length===1) {
  return '0'+ stringNum;
}
else {return stringNum}
  }

  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }



  reset() {
this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());
return `${min}:${sec}`;

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
