class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }
  

  getMinutes() {
    // ... your code goes here
    if(this.currentTime === 0){
      return 0
    }
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    if(this.currentTime === 0) return 0
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
     if(value < 10) return '0' + value;
     return value.toString();
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
      return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
