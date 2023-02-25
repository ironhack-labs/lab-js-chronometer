class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback()
      }
        },1000)
  }

  getMinutes() {
    let entireMinutesPassed = Math.floor(this.currentTime / 60);
    return entireMinutesPassed
  }

  getSeconds() {
    let entireSecondsPassed = Math.floor(this.currentTime % 60);
    return entireSecondsPassed
  }

  computeTwoDigitNumber(value) {
    let valueStringfy = value.toString()
    if(value < 10) {
      return 0 + valueStringfy;
    }
    return valueStringfy
  }
  
  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
