class Chronometer {
  constructor() {class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }
  }
  
}

  start(printTimeCallback) {
        if (typeof printTimeCallback === 'function') {
          this.intervalId = setInterval(() => {
            this.currentTime += 1;
            printTimeCallback(this.currentTime);
          }, 1000);
        } 
        }
      
    // ... your code goes here
  

  getMinutes() {
    return Math.floor(this.currentTime / 60);

    // ... your code goes here
  }

  getSeconds() {   
     return this.currentTime % 60;

    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');

    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);

    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;

    // ... your code goes here
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
  
}
  