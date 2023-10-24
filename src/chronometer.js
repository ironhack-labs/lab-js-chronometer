class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(typeof printTimeCallback ==='function'){
      this.intervalId = setInterval(()=>{
        this.currentTime += 1;
        printTimeCallback()
      }, 1000)
    }else{
      this.intervalId = setInterval(()=>{
        this.currentTime += 1;
      }, 1000)
    }
  }

  getMinutes() {
    return this.currentTime / 60 | 0
  }

  getSeconds() {
    return this.currentTime %60
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return "0" + value
    }else{
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
  }
}
