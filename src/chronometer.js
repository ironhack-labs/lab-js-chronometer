class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

 //  should increment by 1 the currentTime property every 1 second
// should invoke the passed printTimeCallback every 1 second

  start(printTimeCallback) {
 
  this.intervalId = setInterval(() => {
    this.currentTime ++;
    if(printTimeCallback){
      printTimeCallback()
    }
  },1000)

  return this.intervalId

  }

  
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // const seconds = this.currentTime - minutes * 60;
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // should always return a string of length 2
    // getminutes and getsec should return 2 digits and transform to a string 
    // if the digit is single should add 0 Slice method
   return  ("0" + this.getMinutes()).slice(-2) && ("0" + this.getSeconds()).slice(-2)
  }

  stop() {

  if (this.currentTime !== 0) {
  return clearInterval(this.intervalId);
} 
    
 clearInterval(this.intervalId);

}

  reset() {
     this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
