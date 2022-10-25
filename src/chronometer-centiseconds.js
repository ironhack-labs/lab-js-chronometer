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
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime/100)%60;
  }

  getCentiseconds() {
    
    return this.currentTime%6000%100;
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
    let centiseconds = (this.computeTwoDigitNumber(this.getCentiseconds())).toString();
    let seconds = (this.computeTwoDigitNumber(this.getSeconds())).toString();
    let minutes = (this.computeTwoDigitNumber(this.getMinutes())).toString();
    return minutes + `:` + seconds + `.` + centiseconds;
  
  }
}
