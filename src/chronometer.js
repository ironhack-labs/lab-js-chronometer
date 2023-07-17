class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{ 
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback(this.currentTime)
      }
    }, 1000);
    }
  

  getMinutes() {
    let minCounter = Math.floor(this.currentTime / 60);
    return minCounter
  }

  getSeconds() {
    let secCounter = Math.floor(this.currentTime % 60);
    return secCounter
  }

  computeTwoDigitNumber(value) {
    if(value >= 0 && value <10){
      return `0${value}`
    }
    else if(value >= 10){
      return`${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  
}

  reset() {
      this.currentTime = 0;
  }

  split() {
    let twoDigitMin = this.computeTwoDigitNumber(this.getMinutes())
    let twoDigitSec = this.computeTwoDigitNumber(this.getSeconds())

    return `${twoDigitMin}:${twoDigitSec}`
  }
}
