class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }
  

  computeTwoDigitNumber(value) {
    let twoDigitNumber = "";
    if (value.toString().length === 1){
      twoDigitNumber = `0${value}`
      return twoDigitNumber;
    }
    twoDigitNumber = `${value}`;
    return twoDigitNumber;
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
