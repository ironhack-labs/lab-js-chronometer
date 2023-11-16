class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if(printTimeCallback){
      this.intervalId = setInterval(() => {
        this.currentTime ++;
        printTimeCallback();   
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime ++; 
      }, 1000);
    }
}

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringNumber = String(value);
    if (value < 10 && value > 0){
      stringNumber = "0" + stringNumber;
    } else if (value < 1){
      stringNumber = "00";
    } 
    return stringNumber;
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
    return this.computeTwoDigitNumber(this.getMinutes()) +":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}
