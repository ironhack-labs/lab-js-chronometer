class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if(printTimeCallback){
        return printTimeCallback ();
      }  
    }, 10)
    
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime / 100) % 60;
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = Math.floor(this.currentTime % 100);
    return centiseconds;
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
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`; 
  }
}
