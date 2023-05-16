class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.minutes = 0;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;  
        if(typeof printTimeCallback === 'function'){
          printTimeCallback(this.currentTime);
        }; 
    }, 1000);
  }

  getMinutes() {
   if(this.currentTime === 0){
    return 0;
   } 
      if(this.currentTime > 0){
        this.minutes = Math.floor(this.currentTime / 60);
      }
    return this.minutes;
  } 

  getSeconds() {
   if(this.currentTime === 0){
      return 0;
   }  if(this.currentTime > 0){
        return this.currentTime % 60;
   }
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
   if(value < 10) {
      return '0' + value;
    } else{
        return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    const formattedMin = computeTwoDigitNumber(minutes);
    const formattedSec = computeTwoDigitNumber(seconds);
    return `${formattedMin}:${formattedSec}`;
  }
};


