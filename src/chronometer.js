class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if(typeof printTimeCallback === "function"){
          printTimeCallback();
        }
      }, 1000)
      
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const numString = value.toString();
    const extraZero = "0";
    if(numString.length < 2){
     const finalNum = extraZero + numString;
     return finalNum;
    }else{
      return numString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
 }

  reset() {
   
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const formMin = this.computeTwoDigitNumber(minutes);
    const formSec = this.computeTwoDigitNumber(seconds);

    return `${formMin}:${formSec}`;
  }
}
