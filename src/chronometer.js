class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
}

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    if(printTimeCallback) {printTimeCallback()}
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
   
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    return `${value}` 
    // ... your code goes here
    // let oneStr = '';
    // let count =  0;
    // if (oneStr == count){
    //   return ''
    // } 

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
   

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  };
}

