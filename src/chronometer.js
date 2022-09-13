class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(()=>{
    this.currentTime++;
     if(printTimeCallback){
      printTimeCallback();
     }}, 1000);
 
   
  }
  
  getMinutes() {
    let min = this.currentTime / 60;
      return Math.floor(min) ;
     }

  getSeconds() {
    let sec = this.currentTime % 60;
      return sec;
     }


  computeTwoDigitNumber(value) {
    let twoDigits = `0${value}`.slice(-2);
    return twoDigits;
    }
    
   
  

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return this.computeTwoDigitNumber(min) + ':' + this.computeTwoDigitNumber(sec);
  }
}
