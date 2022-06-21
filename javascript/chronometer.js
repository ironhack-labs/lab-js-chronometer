class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // this.currentMilliSeconds = 0;
    // this.miliSeconIntervalId = null -> need to add this
    // ... your code goes here
  }
  
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(typeof printTimeCallback === 'function') {
        printTimeCallback();
      };
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value <10 ) {
      return '0' + value;
    } else if(value === 15) {
      return value.toString();
    } 
    return value.toString();  
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;

    // ... your code goes here
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
