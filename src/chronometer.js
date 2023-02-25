class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000);
    
  }

  getMinutes() {
    if(this.currentTime === 0)
    {
      return 0;
    }
return Math.floor(this.currentTime/60);
  }

  getSeconds() {
   
  return Math.floor(this.currentTime%60);
}

  computeTwoDigitNumber(value) {
    
    const numToString = value.toString();
    if(numToString.length === 1){
      return `0${numToString}`;
    }else{
      return numToString;
    }

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }
}
