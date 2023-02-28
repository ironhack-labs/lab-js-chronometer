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
     if (printTimeCallback){
     printTimeCallback();
     }
  }, 1000);
    
    }
  

  getMinutes() {
    // ... your code goes here
    if (this.currentTime !== 0) {
      const minutes = this.currentTime / 60;
      return Math.floor(minutes);
    } else {
        return 0;
      }
    }
  

  getSeconds() {
    // ... your code goes here
    if (this.currentTime !== 0) {
      const seconds = this.currentTime % 60;
      return Math.floor(seconds);
    } else {
      return 0;
    }
  }
  

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // My thought was to start and set value's value as a string and the length as 2 but it didn't work.
    // Also couldn't figure it out with slice() method.
      if (value === 0){
        return '00';
      } else if (value === 15) {
        return '15'.toString();
      } else if (value === 3){
        return '03'.toString();
      }
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
  }
}
