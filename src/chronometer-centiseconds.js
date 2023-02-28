class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback();
      }
    }
    ,10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }
 
   getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
   }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString();
    if(value<10){
      return `0${valueString}`;
    }
    else{
      return `${valueString}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes())
    const secs = this.computeTwoDigitNumber(this.getSeconds())
    const centsecs = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${min}:${secs}.${centsecs}`;
  }
}

