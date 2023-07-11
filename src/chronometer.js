class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(!printTimeCallback){
      } else {
        printTimeCallback()
      }

    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    value = value.toString()
    if(value.length<2){
      return `0${value}`
    }
    return value
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}
