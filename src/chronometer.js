class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;      
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length < 2){
      return "0" + value;
    }
    return value;
  }

  stop() {
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
    return clearInterval()
    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`
  }
}
