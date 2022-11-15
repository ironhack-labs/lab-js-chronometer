class Chronometer {
  constructor() {
this.currentTime = 0;
this.intervalId = null;
}

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    this.currentTime++
    },1000);
}

  getMinutes() {
const minutes = Math.floor (this.currentTime/60)
return minutes 
  }
  

  getSeconds() {
    const seconds = (this.currentTime%60)
    return seconds
  }

  computeTwoDigitNumber(value) {
     if(value <10){
   return value.toFixed(2)
    }
    return `${value}`
  }

  stop() {
   return clearInterval(this.currentTime)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
     return this.computeTwoDigitNumber 
  }
}
