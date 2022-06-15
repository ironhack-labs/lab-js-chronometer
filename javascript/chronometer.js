class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
       if (printTimeCallback) {
        printTimeCallback();
       }
       //console.log(printTimeCallback);
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    //console.log((this.currentTime*1000*60)/10000);
    return (this.currentTime*1000*60)/10000;
  }
  
  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) return `0${value}`;
    else return "" + value;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }
//BONUS - Iteration 8 & 9: Milliseconds
  split() {
    // ... your code goes here
    let formatMin = this.computeTwoDigitNumber(this.getMinutes());
    let formatSec = this.computeTwoDigitNumber(this.getSeconds());
    let formatMilli = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${formatMin}:${formatSec}:${formatMilli}`;
  }
   
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
