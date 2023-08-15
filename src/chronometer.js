class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(typeof printTimeCallback === 'function') {
      this.intervalId = setInterval(() => {
        this.currentTime+=1;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime+=1;
      }, 1000);
    }
  };

  getMinutes() {
    // ... your code goes here
    let current = Math.floor(this.currentTime/60);
    return current;
  };

  getSeconds() {
    // ... your code goes here
    let secs = this.currentTime%60;
    return secs;
  }

  computeTwoDigitNumber(value) {
    let numToString = value.toString();
    if(numToString.length === 2) {
      return numToString;
    } else if(numToString.length < 2) {
      return numToString = "0" + numToString;
    }
    return numToString;
  };

  stop() {
    clearInterval(this.intervalId);
  };

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

