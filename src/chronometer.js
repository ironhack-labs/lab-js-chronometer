class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=> {
      this.currentTime +=1;
      if (printTimeCallback) {printTimeCallback()};
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60) ;
  }

  getSeconds() {
    // ... your code goes here
    const secondsElapsed = this.currentTime % 60
    return secondsElapsed
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const padded = ("0" + value).slice(-2) 
  return padded
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
