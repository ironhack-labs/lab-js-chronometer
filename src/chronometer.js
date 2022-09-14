class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if (typeof printTimeCallback === 'function'){
        printTimeCallback();
      }     
    }, 1000);
  }

  getMinutes() {
    // math.floor
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = "";
    if(value%60 < 10){
      twoDigitNumber = "0" + (value%60);
    } else {
      twoDigitNumber = "" + (value%60);
    }
    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}
