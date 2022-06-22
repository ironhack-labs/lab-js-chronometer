class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId  = null;
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = 
    setInterval(() => {
      this.currentTime ++;
      if (arguments.length !== 0) {
        printTimeCallback();
      }
    }, 1000); 
  }

  getMinutes() {return Math.floor(this.currentTime/60);}

  getSeconds() {return Math.floor(this.currentTime%60);}

  computeTwoDigitNumber(value) {
    if(value.toString().length === 1)
      return "0" + value.toString().slice(0,2);

    return value.toString().slice(0,2);
  }

  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
