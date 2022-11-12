class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    }
 

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++

      if(printTimeCallback) printTimeCallback()
  }, 1000);
  return printTimeCallback
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60
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
    return `${min}:${sec}`
  }
}
