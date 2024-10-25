class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60);
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let centiSeconds = this.currentTime % 100; 
    return centiSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const strValue = 0 + value.toString();
    return strValue.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    const cenSecs = this.getCentiseconds()
    const splitStr = `${mins}:${secs}:${cenSecs}`
    return splitStr;
  }
}
