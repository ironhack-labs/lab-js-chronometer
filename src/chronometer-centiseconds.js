class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1 ;    
      if (printTimeCallback) {
        printTimeCallback()
      }
    },10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60/100)
  }

  getSeconds() {
    return Math.floor(this.currentTime/100)-this.getMinutes()*60
  }

  getCentiseconds() {
    return this.currentTime -this.getMinutes()*60*100 -this.getSeconds()*100
  }

  computeTwoDigitNumber(value) {
    if (value>10){return String(value)}
    else{return "0" + String(value)}
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let result = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getCentiseconds())}`
    return result
  }
}
