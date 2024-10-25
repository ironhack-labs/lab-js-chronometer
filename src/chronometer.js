class Chronometer {
  constructor() {
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
    }, 1000);
  }


  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
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
    const splitStr = `${mins}:${secs}`
    return splitStr;
  }
  
}


