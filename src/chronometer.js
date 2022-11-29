class Chronometer {
  constructor() {
    // iteration 1: the chronometer class
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    // iteration 2: the start method
    this.intervalId = setInterval(() => {
      if(typeof printTimeCallback === 'function'){
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);

  }

  getMinutes() {
    // iteration 3: the get minutes method 
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // iteration 4: the get seconds method
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // iteration 5: the compute two digit number method
    let stringValue = value.toString();
    if (stringValue.length > 1) {
      return stringValue;
    } else {
      return `0${stringValue}`;
    }
  }

  stop() {
    // iteration 6: the stop method
    clearInterval(this.intervalId);
  }

  reset() {
    // iteration 7: the reset method
    this.currentTime = 0;
  }

  split() {
    // iteration 8: the split method
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let newFormat = `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;

    return newFormat;
  }
}
