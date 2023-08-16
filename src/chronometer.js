class Chronometer {
  constructor() {
    this.currentTime = 0;   
    this.intervalId = null; //not interval has been estarted yet
  }

  start(printTimeCallback) { // the start method printTimeCallback function as an argument
    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60); 
    return minutes;
  }

  getSeconds() {
    // const seconds = this.minutes % 60;
    // return seconds;

    if (this.currentTime === 0) {
      return 0;
    }

    const seconds = this.currentTime % 60;
    return seconds;
  }
  

 
  computeTwoDigitNumber(value) {
    // const twoDigit = String(value).padStart(2, '0');
    // return twoDigit;

    const twoDigit = ('0' + value).slice(-2);
    return twoDigit;
    }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
