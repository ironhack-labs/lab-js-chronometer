class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime +=1
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    },1000)
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitNumber = ``;
    if (value < 10) {
      twoDigitNumber = '0' + value;

    }
    else twoDigitNumber = `${value}`;
    return twoDigitNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    console.log(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let splitFormat = `${this.getMinutes}`+ ':' + `${this.getSeconds}`
    return splitFormat;
    return `${this.getMinutes()}+ ':' + ${this.getSeconds()}`
  }
  
}
