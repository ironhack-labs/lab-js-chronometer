class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
      if(printTimeCallback){
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let min = this.currentTime / 60;
    return Math.floor(min);
  }

  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60;
    return Math.floor(sec);

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value = String(value);
    if(value.length === 1){
      value = "0" + value;
    }
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
  }
}
