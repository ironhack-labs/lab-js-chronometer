class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
  this.intervalId = setInterval(() => {
    this.currentTime++;
    if (printTimeCallback ){
    printTimeCallback(this.currentTime);
  }
  }, 1000, 3000)
  };
  

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = value.toString(); 
    if (string.length < 2){
      return "0" + string;
    }else {
      return string;
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
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}
