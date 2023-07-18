class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId= null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
        this.currentTime++
        if (printTimeCallback) {
            printTimeCallback()
        }
    }, 1000) 
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }
    let currentTime = this.currentTime;
    let seconds = currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return `0${value}`
    }
    else{
      return `${value}`
    }
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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}