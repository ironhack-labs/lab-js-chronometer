class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) printTimeCallback();
      this.currentTime += 1;
    }, 1000);
  }
    
   
  

  getMinutes() {
   let minutes = Math.floor(this.currentTime / 60)
   return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value === 0){
      return '00';
    }else if (value <10){
      return '0'+ value.toString();
    }else {
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
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
  
  return minutes + ":" + seconds;
 }
}