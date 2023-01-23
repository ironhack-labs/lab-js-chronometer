class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
    
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback){
        return printTimeCallback ();
      }  
    }, 1000)
    
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return "0" + String(value);
    } else {
      return value.toString();
    }  
  }

  stop() {
    clearInterval(this.intervalId);
  }
    

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;

    
  }
}
