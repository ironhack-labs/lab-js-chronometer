class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  
    this.intervalId = setInterval(()=>{this.currentTime++; 
   if (printTimeCallback){return printTimeCallback();} },1000)
  
  }

  getMinutes() {
    let min = (this.currentTime / 60);
    let integerMinutes = Math.floor(min);
    return integerMinutes;

  }

  getSeconds() {
    let sec = this.currentTime % 60
    return sec;
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return `0${value}`
    }
    else{
      return `${value}`
    }
  }

  stop() {
   clearInterval(this.intervalId)
  } 

  reset() {
    this.currentTime = 0;
  }

  split() {
 
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
   
   
}
}