class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      };
    }, 10);
    return this.intervalId;
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime/100 - this.getMinutes()*60);
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime - this.getSeconds()*100 - this.getMinutes()*6000;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return `0${value}`.slice(-2);
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let centsec = this.getCentiseconds();
    let sec = this.getSeconds();
    let min = this.getMinutes();
    return this.computeTwoDigitNumber(min)+':'+this.computeTwoDigitNumber(sec)+'.'+this.computeTwoDigitNumber(centsec);
  }
}
