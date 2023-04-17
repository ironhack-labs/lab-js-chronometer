class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback()
      }
    }, 1000);
  };
  

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime%60)
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length === 2){
      return value.toString();
    }
    return value.toString().padStart(2,"0");
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

