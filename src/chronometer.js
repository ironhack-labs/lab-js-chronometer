class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(()=> {
      if(printTimeCallback) {
        printTimeCallback()}
      this.currentTime +=1
    },1000); 
  }
  

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
   return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    return value.toLocaleString(undefined, {minimumIntegerDigits: 2});
    }

  stop() {
    return clearInterval(this.currentTime);    
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let minutes = (this.computeTwoDigitNumber(this.getMinutes())).toString();
    let segundos = (this.computeTwoDigitNumber(this.getSeconds())).toString();
   return minutes + ":" + segundos;
  }
}
