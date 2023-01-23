class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  };

  start(printTimeCallback) {
    // ... your code goes here
     this.intervalId = setInterval(() => {
     this.currentTime++;
     if (printTimeCallback) return printTimeCallback();
     }, 1000);
     return this.intervalId;
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    // if (this.currentTime === 0) return 0;
    return  Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) return  `0${value}`;
    else return `${value}`;
  /* Another approach: 
    if (value.toString()[1] === undefined) return `0${value.toString()}`;
    else if (value.toString()[0] === undefined) return `00`;
    else return value.toString();  */
  };

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
    let formatedMin = this.computeTwoDigitNumber(this.getMinutes());
    let formatedSec = this.computeTwoDigitNumber(this.getSeconds());
    return `${formatedMin}:${formatedSec}`;
  }
}

