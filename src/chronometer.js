class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      }
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = "0"+ (String(value));
    if (value >= 10) {
      twoDigitNumber =twoDigitNumber.slice(1,3)
    }
    return twoDigitNumber
  }
  

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    let mm = this.computeTwoDigitNumber(this.getMinutes());

    return mm+ ":"+ss;
  }
}
