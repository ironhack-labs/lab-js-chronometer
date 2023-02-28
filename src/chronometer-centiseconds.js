class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 6000);
    }
  }

  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor((this.currentTime % 6000) / 100);
    }
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100); 
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const newSplitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const newSplitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    const newSplitCenti = this.computeTwoDigitNumber(this.getCentiseconds());
    
    return `${newSplitMinutes}:${newSplitSeconds}.${newSplitCenti}`;
  }
}
