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
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }
  
  getCentiseconds() {
    return Math.floor(this.currentTime % 100) ;
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
    let cs = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${mm}:${ss}.${cs}`
  }
}
