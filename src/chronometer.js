class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   if (printTimeCallback) {
    this.intervalId = setInterval(printTimeCallback, 1000);
   }
   else {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000)
   }
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
      return value.toString().padStart(2, '0');
    }
    

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`;
  }
     
  }

