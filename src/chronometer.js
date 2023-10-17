class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      if (printTimeCallback){
        printTimeCallback();
      }
      this.currentTime++;
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    // should return the number of entire minutes passed
    let getIntMinutes = this.currentTime / 60;
    return Math.floor(getIntMinutes);
  }

  getSeconds() {
    // ... your code goes here
    let getIntSeconds = this.currentTime % 60;
    return Math.floor(getIntSeconds);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value = String(value);
    if (value.length == 1)
      value = ('0' + value);
    return value;
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
    // should return a string showing the minutes and seconds in the "mm:ss" format
    const minutesTrasform = this.computeTwoDigitNumber(this.getMinutes());
    const secondsTrasform = this.computeTwoDigitNumber(this.getSeconds());

    return (`${minutesTrasform}:${secondsTrasform}`);
  }
}
