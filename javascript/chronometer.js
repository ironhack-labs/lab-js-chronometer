class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback()
      }     
    }, 1000)   
  };

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  };

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  };

  computeTwoDigitNumber(value) {
    if(value === 0){
      return value + "0"
    } else if(value < 10){
      return "0" + value
    } else if(value > 10){
      return value + ""
    };
  };

  stop() {
    clearInterval(this.intervalId)
  };

  reset() {
    this.currentTime = 0;
  };

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}