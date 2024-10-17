class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
      printTimeCallback();
    }
    console.log(this.currentTime)
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime  / 100 - 60 * this.getMinutes());
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime - 6000 * this.getMinutes() - 100 * this.getSeconds();
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const valueExtended = `0${value}`;        
    return valueExtended.slice(-2);
    
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minString = this.computeTwoDigitNumber(this.getMinutes())
    const secString = this.computeTwoDigitNumber(this.getSeconds())
    const centString = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minString}:${secString}.${centString}`
  }
}
