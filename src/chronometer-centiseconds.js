class Chronometer {
  constructor() {
     
      this.currentTime=0;
      this.intervalId=null;
  }

  start(printTimeCallback) {

   this.intervalId = setInterval(() => {
     this.currentTime++;
     if(typeof printTimeCallback === 'function'){
      printTimeCallback();
     }
    }, 10)
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 6000);
    }
  }

  getSeconds() {
    if(this.currentTime === 0){
      return 0;
    }else{
      return Math.floor((this.currentTime / 100) % 60);
    }
  }

  getCentiseconds() {
    if(this.currentTime === 0){
      return 0;
    }else{
      return this.currentTime % 100;
    }
  }

  computeTwoDigitNumber(value) {
    const numToString = value.toString();
    if(numToString.length === 1){
      return `0${numToString}`;
    }else{
      return numToString;
    }
    
  }

  stop() {
    clearInterval(this.intervalId);
   
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    const centsecs=this.computeTwoDigitNumber(this.getCentiseconds());
    return `${mins}:${secs}.${centsecs}`;;
  }
}
