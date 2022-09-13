class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.interValid = null; 
  }

  start(printTimeCallback) {
    this.interValid = setInterval (() => {
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
