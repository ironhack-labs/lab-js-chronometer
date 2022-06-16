class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
      // ... your code goes here
      this.intervalId = setInterval(() => {this.currentTime++
          if (arguments.length && typeof printTimeCallback === 'function') {
            printTimeCallback()
          }
    }, 1000);
  }

  getMinutes() {
     return Math.floor (this.currentTime / 60)
    }
  

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value > 9) {
      return value.toString();
    } 
    return `0${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
   
    }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    min = this.computeTwoDigitNumber (min);
    sec = this.computeTwoDigitNumber (sec);
    return `${min}:${sec}`;
 }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
