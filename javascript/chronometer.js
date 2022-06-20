class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(arguments.length > 0 && typeof printTimeCallback === 'function'){
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / (60 * 100))
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds(){ //centiseconds
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value > 9){
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
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let centi = this.getCentiseconds();
    min = this.computeTwoDigitNumber(min);
    sec = this.computeTwoDigitNumber(sec);
    centi = this.computeTwoDigitNumber(centi);
    return `${min}:${sec}:${centi}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}