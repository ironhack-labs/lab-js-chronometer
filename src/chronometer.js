class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
   let strValue = value.toString();
    if (strValue.length === 2) {
      return strValue;
    } else if (strValue.length === 1) {
      return `0${strValue}`;
    }
    return `00`
    
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let seconds = (this.computeTwoDigitNumber(this.getSeconds())).toString();
    let minutes = (this.computeTwoDigitNumber(this.getMinutes())).toString();
    return minutes + `:` + seconds;
  }
}
