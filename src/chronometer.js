class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(
      () => {
        this.currentTime += 1;
    if(typeof printTimeCallback === 'function'){
      printTimeCallback()
    }
      }, 1000);
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    const extraSeconds = this.currentTime % 60;
    return extraSeconds;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime =0
  }

  split() {

  }
}
