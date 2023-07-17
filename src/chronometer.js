class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
        if (printTimeCallback) printTimeCallback();
    }, 1000);
    
  }

  getMinutes() {
    
    if (this.currentTime === 0){
      return 0;
    } else {
      return Math.floor(this.currentTime/60);
    }

  }

  getSeconds() {
    if (this.currentTime === 0){
      return 0;
    } else {
      return this.currentTime%60;
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}
