class Chronometer {
  constructor() {
    (this.currentTime = 0), 
    (this.intervalId = null)
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback(this.currentTime)
      }
    }, 1000);   
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor((this.currentTime)/60)
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    return value<10?`0${value}`:`${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes=this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
