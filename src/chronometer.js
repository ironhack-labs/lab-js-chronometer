class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);  
  } 


  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime/60)
    return minutesPassed;
  }


  getSeconds() {
    return this.currentTime%60;
  }

  
  computeTwoDigitNumber(value) { 
    if(value<10){
      return`0${value}`
    } else if (value>10){
      return`${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
     
  }
}

