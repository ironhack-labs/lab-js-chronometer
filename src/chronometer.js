class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      
      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const currentTimeMinutes = Math.floor((this.currentTime / 60));
    return currentTimeMinutes;
  }

  getSeconds() {
    const currentTimeSeconds = (this.currentTime - 60);
    if (this.currentTime < 0){
      return 0;
    }
    return currentTimeSeconds;

  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    clearInterval()
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
  }
}
