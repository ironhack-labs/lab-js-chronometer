class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if(typeof printTimeCallback!== undefined){
      this.intervalId=setInterval(()=> {this.currentTime++,1;
        printTimeCallback()});
    }

  }

  getMinutes() {
    // ... your code goes here
  }
    return Math.floor(this.currentTime/60000);
    }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60000;
  }

  getCentiseonds(){
    return this.currentTime/10;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value <10){
      return "0"+value;
    }
    else{
      return value;
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
  }

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds)}:${this.computeTwoDigitNumber(this.getCentiseonds())}}`
}