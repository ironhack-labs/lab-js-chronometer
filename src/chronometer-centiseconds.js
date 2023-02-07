class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  
    this.intervalId = setInterval(()=>{this.currentTime++; 
   if (printTimeCallback){return printTimeCallback();} },10)
  
  }

  getMinutes() {
    let min = (this.currentTime / 6000);
    let integerMinutes = Math.floor(min);
    return integerMinutes;

  }

  getSeconds() {
  let minutes = this.getMinutes();
  let seconds = (this.currentTime - (minutes * 6000)) / 100;
  return Math.floor(seconds)
  }

getCentiseconds() {
let minutes = this.getMinutes();
let seconds = this.getSeconds();
let centiSeconds = this.currentTime - (minutes * 6000) - (seconds * 100);
return centiSeconds;

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
 
  
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
   
   
}
}