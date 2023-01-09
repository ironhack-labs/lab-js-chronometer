class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      // increment currentTime by 1 second
      this.currentTime += 1;
      if(printTimeCallback){
      printTimeCallback();}
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {
    if (value.length >= 2) return value
    else return value.toString().padStart(2, "0")
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }
}
