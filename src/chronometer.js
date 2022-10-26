class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  //   // ... your code goes here
    //  if (printTimeCallback){
      this.intervalId = setInterval(()=>{
        this.currentTime ++;
        if (printTimeCallback){
          printTimeCallback()
        }
      },1000)
   
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let value1 = String(value)
    if(value1.length < 2){
      return value1 = "0" + value1
    }else{
      return value1
    }

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`}
}
