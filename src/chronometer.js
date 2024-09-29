class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime++;

      if (printTimeCallback){
        printTimeCallback()
      };
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return ('0' + value).slice(-2);
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
    let mins = this.getMinutes();
    mins = this.computeTwoDigitNumber(mins);
    let secs = this.getSeconds();
    secs = this.computeTwoDigitNumber(secs);
    
    return `${mins}:${secs}`
  }
}
