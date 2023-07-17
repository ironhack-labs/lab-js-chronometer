class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
// The interval id that is returned by calling setInterval should be assigned to the intervalId property, so this way, we will be able to clear it later on when we need to stop the timer.
  
start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback(this.currentTime);
      }    
    }, 1000);

  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }
    
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if(value < 10 && value >= 0){
      return `0${value}`
    }
    else {
      return `${value}`
    }
    
  }
  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`;
  }
}
