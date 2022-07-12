class Chronometer {
  constructor() {
    this.intervalId = null; 
    this.currentTime = 0;
  }
  
  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback();
      }
    }, 10);
 
}

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return (this.currentTime / 100 % 60);
    }

  getCentiseconds(){
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    this.value = value;
    let twoDigitNumber = this.value.toFixed(0);
    if (twoDigitNumber.length === 1){
      return '0' + twoDigitNumber;
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
    let twoDigitMinute = (this.computeTwoDigitNumber(this.getMinutes()));
    let twoDigitSecond = (this.computeTwoDigitNumber(this.getSeconds()));
    let twoDigitCentisecond = (this.computeTwoDigitNumber(this.getCentiseconds()));
     return `${twoDigitMinute}` + `:` + `${twoDigitSecond}` + '.' + `${twoDigitCentisecond}`;
  }
}

