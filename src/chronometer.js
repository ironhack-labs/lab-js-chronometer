class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{ this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback()
        }
    }, 1000)
    //const myTime = setInterval(function () { printTimeCallback; }, 1000)
    //const myTime = setInterval(printTimeCallback, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value + '';
    if (stringValue.length === 1) {
      return '0'+ stringValue.slice (0);
    }
      return stringValue;
  }
  

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
      this.currentTime = 0
    }
  

  split() {
    // ... your code goes here
  }
}
