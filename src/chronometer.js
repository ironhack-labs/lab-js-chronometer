class Chronometer {
  constructor() {
    (this.currentTime = 0), 
    (this.intervalId = null),
    (this.hundredths=0),
    (this.hundredthsIntervalID=null)
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback(this.currentTime)
      }
    }, 1000);

    this.hundredthsIntervalID=setInterval(() => {
      this.hundredths++;
      if (this.hundredths>=100){
        this.hundredths=0
      }
    }, 10);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    return value<10?`0${value}`:`${value}`
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
