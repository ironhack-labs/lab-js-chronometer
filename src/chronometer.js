class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
    this.intervalId = this.currentTime
  }

  getMinutes() {
    
      return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    
    return this.currentTime % 60;

  }

  computeTwoDigitNumber(value) {
    
    if (value < 10) {
      valueArr = value.toString().split('').map(x => +x);
      valueArr.unshift(0);
      return valueArr.join('');
    } else {
      return value.toString();
    }
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
