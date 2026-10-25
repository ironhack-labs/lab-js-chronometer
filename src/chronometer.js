class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

    start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }


  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    
     return this.currentTime >= 60 ? this.currentTime % 60 : this.currentTime;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return `${value}`.length < 2 ? "0" + `${value}` : `${value}`;
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
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());

    return `${minutes}:${seconds}`;
  }
};
