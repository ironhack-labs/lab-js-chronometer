class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (printTimeCallback && typeof printTimeCallback === 'function') {
  
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback();
      }, 1000); 
    } else {
     
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000); // 1000 milliseconds = 1 second
    }
  }
  

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).padStart(2, '0');
  }

  stop() {
    // ... your code goes here
      clearInterval(this.intervalId);
      this.intervalId = null;
   
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const formattedMinutes = this.computeTwoDigitNumber(minutes);
    const formattedSeconds = this.computeTwoDigitNumber(seconds);
    
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

module.exports = Chronometer;
