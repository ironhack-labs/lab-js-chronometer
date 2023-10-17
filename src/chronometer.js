class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    // ... your code goes here
   this.intervalId = setInterval(()=> {
   if(printTimeCallback){
        printTimeCallback();
      }
      
      this.currentTime ++;
     
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime/60;
    return Math.floor(minutes);


  }
  getSeconds() {
    // ... your code goes here
    
    let seconds = this.currentTime %60
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
/*     value = String(value);
    if (value.length == 1)
      value = ('0' + value);
    return value; */
    if (value < 10) {
      return "0" + `${value}`;
    } else return `${value}`;
  
  
  }

  stop() {
    // ... your code goes here
    if(stop){
      clearInterval(this.intervalId)
    }

  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    // ... your code goes here
      const minutesString = this.computeTwoDigitNumber(this.getMinutes())
      const secondsString = this.computeTwoDigitNumber(this.getSeconds())
      return `${minutesString}:${secondsString}`
  }
}
