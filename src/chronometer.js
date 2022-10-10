class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
      this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback){//if up top?
        printTimeCallback();
      }      
    }, 1000)
  };
  

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length === 1) return `0${value.toString()}`
    else return value.toString(); //not dynamic??
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mins = this.getMinutes();
    let secs = this.getSeconds();
    return `${this.computeTwoDigitNumber(mins)}:${this.computeTwoDigitNumber(secs)}`

  }
}
