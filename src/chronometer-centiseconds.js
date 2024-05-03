class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const callback = () => {
      console.log(this.currentTime++);
      if (this.currentTime <= 3)
          setTimeout(callback, 1000);
      else
          printTimeCallback();
  };
  setTimeout(callback, 1000);
}

  getMinutes() {
    const totalMinutes = Math.floor(this.currentTime / 60);
    return totalMinutes;

  }

  getSeconds() {
 

  
    
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
   
  }

  stop() {
    
    clearInterval(intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
