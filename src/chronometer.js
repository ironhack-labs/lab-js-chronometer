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
    }, 1000);
 
}

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return (this.currentTime % 60);
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
    let twoDigitMinute = (this.computeTwoDigitNumber(this.getMinutes()))
    let twoDigitSecond = (this.computeTwoDigitNumber(this.getSeconds()))
     return `${twoDigitMinute}` + `:` + `${twoDigitSecond}`
  }
}
