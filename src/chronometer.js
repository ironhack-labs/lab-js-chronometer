class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  /*
  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{this.currentTime += 1;}, 1000);
    
    if(printTimeCallback){
     this.intervalId = setInterval(() => {                      
          printTimeCallback();
      }, 1000);
    } 
  }
  */

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {  
      this.currentTime += 1;
      if(printTimeCallback){printTimeCallback();}  
    }, 1000);
  }
  

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value.toString().length === 1 ? `0${value.toString()}` : value.toString();
  }

  stop() {
      clearInterval(this.intervalId);
      if(this.start){
        clearInterval(this.intervalId);
      }
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
