class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback(this.currentTime)
      }
    }, 10)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 6000)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor((this.currentTime % 6000) / 100);
    return seconds
  }

  getCentiseconds() {
    // ... your code goes here
    let centiSeconds = this.currentTime % 100;
    return centiSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let newValue = '0' + value.toString();
    return newValue.slice(-2)
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
