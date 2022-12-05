class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      if(printTimeCallback !== undefined){
        printTimeCallback();
      }
      
      this.currentTime++;
      

    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
      if (value.toString().length === 1){
    return `0${value.toString()}`
  } else {
  
  return value.toString().slice(0,2);
  }
  }

  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
