class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime++;

        if (this.currentTime === 3) {
          clearInterval(this.intervalId);
          this.currentTime = 3;
        }

        printTimeCallback(this.currentTime);
      }, 1000);
    }
      
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } 
    else {
      return Math.floor(this.currentTime / 60);
    }
    
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    else {
      return (this.currentTime % 60);
    }
  }

  computeTwoDigitNumber(value) {
    if (this.currentTime === 0) {
      return "00";
    }
    else if (value < 10) {
      return `0${value}`;
      }
    }
  

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
