
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    if(this.currentTime === 0) {
     return 0;
    } else {
      return Math.floor(this.currentTime/60)
  }}

  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
     } else{
      return this.currentTime%60;  
     }
  }

  computeTwoDigitNumber(value) {
   let stringSec = '0'+value;
  
   if(stringSec.length == 3){
      return ''+value;
   }
   else if(stringSec.length == 2){
      return stringSec
   }
  }

  stop() {
   clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;// ... your code goes here
  }

  split() {
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    let min = this.computeTwoDigitNumber(this.getMinutes()); 

    return `${min}:${sec}`// ... your code goes here
  }
}
