class Chronometer {
  constructor() {
    this.currentTime = 0 ;
    this.intervalId = null;
  }

  start(printTimeCallback) { 
  this.intervalId = setInterval(() => { 

    this.currentTime += 1
    if ( printTimeCallback  ) {
      printTimeCallback();
    }

  },1000);
  
  }

  getMinutes() {
   return Math.floor(this.currentTime/60)
  }

  getSeconds() {
   return this.currentTime % 60 ;
  }

  computeTwoDigitNumber(value) {
    if (typeof(value)=== 'number'){
      let str= value.toString();
      if (str.length > 2) {
        str = str.slice(0);
      } else if (str.length < 2 ){
        return str = '0' + str.slice(0);
      }
      return str;
    } 
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0 ;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
  }
