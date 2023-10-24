class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (printTimeCallback && typeof printTimeCallback === "function") {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback(this.currentTime);
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
      return Math.floor(this.currentTime / 60);
    }
  

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
      return '0' + value
    } else{
    return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
    clearInterval()
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minuts = this.computeTwoDigitNumber(getMinutes())
    let seconds = this.computeTwoDigitNumber(getSeconds())
  }
}
