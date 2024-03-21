class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentCentiSecondTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentCentiSecondTime++;
      if(this.currentCentiSecondTime === 100) {
        this.currentCentiSecondTime = 0;
        this.currentTime++;
      }
      if(printTimeCallback){
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime) / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime) % 60);
  }

  getCentiSeconds() {
    // ... your code goes here 
    return Math.floor(this.currentCentiSecondTime ) % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitValue = value.toString();
    if(twoDigitValue.length ===1) {
      twoDigitValue = '0' + twoDigitValue;
    }

    return twoDigitValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiSeconds());
    return  ` ${minutes}:${seconds}:${centiSeconds}`;
  }
}
