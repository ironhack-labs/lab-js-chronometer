class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0,
    this.intervalId=null
  }

  start(printTimeCallback) {
    // ... your code goes here
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if (printTimeCallback) {
          printTimeCallback();
        }
      }, 1000);    

  }

  getMinutes() {
    // ... your code goes here
      let minutes = Math.floor(this.currentTime / 60);
      return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime%60;
      return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value;
    }
      return value.toString();
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
    let minutes = this.getMinutes();
    let stringMinutes = this.computeTwoDigitNumber(minutes);
    let seconds = this.getSeconds();
    let stringSeconds = this.computeTwoDigitNumber(seconds);
    return `${stringMinutes}:${stringSeconds}`;
  }
}
