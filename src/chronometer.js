class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0
    this.intervalId=null
  }

  start(printTimeCallback) {
    // ... your code goes here#
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback){
      printTimeCallback();
    }
    }, 1000);
  }

    
      
  
    
  

  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }
  

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    } else {
      const minutes = Math.floor(this.currentTime / 60);
      const seconds =this.currentTime- minutes * 60;
      return seconds;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value === 0) {
      return '00';
    } else if (value === 15) {
      return '15';
    } else {
      let result = value.toString();
      if (result.length === 1) {
        result = '0' + result;
      }
      return result;
    }

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.startTime = null;
    
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
