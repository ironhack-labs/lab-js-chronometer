class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => { 
      this.currentTime += 1;
      printTimeCallback();
    } , 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = ("0" + value).slice(-2);
    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    computeTwoDigitNumber(this.getMinutes, this.getSeconds)
  }
}
