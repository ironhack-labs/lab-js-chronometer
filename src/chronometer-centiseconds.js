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
        },10)
  }

  getMinutes() {
    let entireMinutesPassed = Math.floor(this.currentTime / 6000);
    return entireMinutesPassed
  }

  getSeconds() {
    let entireSecondsPassed = Math.floor(this.currentTime / 100 % 60);
    return entireSecondsPassed
  }

  getCentiseconds() {
      let miniSecond = Math.floor(this.currentTime % 100)
      return miniSecond

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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
