class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback !== undefined) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let toString = value.toString()    
    if(toString.length < 2) {
      return "0" + toString.slice()
    } else {
      return toString.slice()
    }        
  }

  stop() {
    return clearInterval(this.intervalId);    
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {    
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;

  }
}
