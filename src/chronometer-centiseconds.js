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
      if (printTimeCallback) { printTimeCallback() };
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    /*if (this.currentTime === 60) {
      return this.currentTime = 0;
    }else*/
    return Math.floor(this.currentTime / 6000);
    
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100) % 60
  }
  
  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  return ("0" + value).slice(-2) 
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
   
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = `${this.computeTwoDigitNumber(this.getCentiseconds())}`.toUpperCase();
    return `${minutes}:${seconds}.${centiseconds}`

  }
}
