class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {this.currentTime +=1 })
    setInterval(printTimeCallback,1000);
    setInterval(intervalId,3000);
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
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
