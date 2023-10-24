class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }
  /*start(printTimeCallback) {
   this.intervalId = setInterval (()=> {
    printTimeCallback && printTimeCallback()
    this.currentTime++
   },1000) 
   
  }
  */

  getMinutes() {
    return Math.floor (this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let toString = value.toString()
    if (toString.length === 1) {
      return "0" + toString;
      }
      if (toString === 0) {
        return "00";
      }
      return toString
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes()).toString();
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds()).toString();
    return splitMinutes + ":" + splitSeconds
  }
}
