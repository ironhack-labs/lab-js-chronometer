class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.currentTime = 0;
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }
  //ALTERNATIVE
  /*
  start(printTimeCallback) {
this.intervalId = setInterval(() => {
  if (printTimeCallback !== undefined || printTimeCallback) {
    printTimeCallback();
  }
  this.currentTime ++;
  }, 1000);
  */
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let twoDigitString = String(value);
    if (twoDigitString.length < 2) {
      twoDigitString = "0" + twoDigitString;
    }
    return twoDigitString;
  }
  //ALTERNATIVE
  /*
computeTwoDigitNumber(value) {
if (value < 10) return `0${value}`;
return ${value};
}
*/
  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }
  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }
}
