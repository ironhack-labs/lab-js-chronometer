class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback();
      }
    }, 1000);
    
  }

  getMinutes() {
    return Math.floor((this.currentTime/60))
  }

  getSeconds() {
    return Math.floor((this.currentTime%60))
  }

  computeTwoDigitNumber(value) {
    let string= value.toString()
    if (string.length<2){
      string= "0"+string.slice(0)
    }
    return string

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    this.getMinutes() this.getSeconds
  }
}
