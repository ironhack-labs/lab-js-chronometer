class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++

      if(printTimeCallback) printTimeCallback()
  }, 10);
  return printTimeCallback
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return this.currentTime % 6000 / 100
  }

  getCentiseconds() {
    return this.currentTime % ;
  }

  computeTwoDigitNumber(value) {
    let strNumber = JSON.stringify(value) 
    if(value < 10){
    return 0 + strNumber;
   }
    if (value >=10){
    return strNumber;
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    const csec = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${min}:${sec}:${csec}`
  }
}
