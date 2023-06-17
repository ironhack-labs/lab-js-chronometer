class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
    this.currentTime += 1; 
   if (printTimeCallback) {
    printTimeCallback()
   } 
  }, 10);

    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime - this.getMinutes() * 6000) / 100);
  }

  getCentiseconds() {

    return parseInt(this.currentTime.toString().slice(-2))

    

  }

  computeTwoDigitNumber(value) {
    /*let val = value.toString()
    if (val.length === 1) {
      val = "0" + val;
    }
    return val;*/

    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0 
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
