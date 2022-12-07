class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if(printTimeCallback) {
      printTimeCallback();
      }
    },1000) 
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }


  // the instructions suggest using the .slice() method for this, and I don't see why or how to use it here. 
  computeTwoDigitNumber(value) {
    return value.toString().length === 1 ? `0${value.toString()}` : value.toString()
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
