class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();  // execute callback if passed
      }
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    const calculateMinutes = Math.floor(this.currentTime/60);
    return calculateMinutes;
  }

  getSeconds() {
    // ... your code goes here
    const calculateSeconds = Math.floor(this.currentTime%60);
    return calculateSeconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  if (value<10){
    return "0"+`${value}`;
  } else {
    return `${value}`;
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
    const formatedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const formatedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${formatedMinutes}:${formatedSeconds}`;
  }
}
