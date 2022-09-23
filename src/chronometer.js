class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

      this.intervalId = setInterval(() => {
        this.currentTime++
        if (printTimeCallback !== undefined) {
          printTimeCallback();
        }
  }, 1000);
    
  }

  getMinutes() {
    let minutes = 0;
    if (this.currentTime == 0) {
      minutes = 0;
      return minutes
    } else {
      minutes = this.currentTime / 60;
      minutes = Math.floor(minutes);
      return minutes;
    }
  }

  getSeconds() {
    let currentSecs = 0;
    currentSecs = this.currentTime % 60;
    return currentSecs;
  }

  computeTwoDigitNumber(value) {
    let newValue = `` + value;
    if (newValue.length == 2) {
      return newValue;
    } else if (newValue.length == 1) {
      return `0` + newValue;
    } else return `00`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    return this.currentTime;
  }

  split() {
    // ... your code goes here
  }
}
