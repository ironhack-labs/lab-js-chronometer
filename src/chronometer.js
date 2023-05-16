class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
   setInterval(() => {
    this.currentTime++; 
   }, 1000);
   
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60) 
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60
    }

  computeTwoDigitNumber(value) {
    return ("00" + value)
  }

  stop() {
  }

  stop() {
  }

  stop() {
clearInterval(this.currentTime)
}

  reset() {
    this.stop
    this.currentTime = 0;
    }

  split() {
  }
}
