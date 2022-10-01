class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
    
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
      }, 1000)
    }
  

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
   let num = ("0" + value).slice(-2);
   return num;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return this.computeTwoDigitNumber(min) + ":" + this.computeTwoDigitNumber(sec);
  }
}
