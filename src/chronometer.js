class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if(typeof printTimeCallback === 'function'){
      const setIntervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback();    
      },1000); 
    this.intervalId = setIntervalId;
    }else{
      const setIntervalId = setInterval(() => {
        this.currentTime += 1;   
      },1000); 
    this.intervalId = setIntervalId;
    }
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let strValueCopy = value.toString();
    if(strValueCopy.length === 1){
      let strValue = "0"+strValueCopy;
      return strValue;
    }else{
      return strValueCopy;
    }  

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds =  this.computeTwoDigitNumber(this.getSeconds());
    return minutes+':'+seconds
  }
}
