class Chronometer {
  constructor() {
    // ... your code goes here
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    // ... your code goes here

    //setInterval(() => {/* */}).

    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        return printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let min = (this.currentTime / 60);
  let integerMinutes = Math.floor(min);
    return integerMinutes;
  }

  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60
    return sec;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`
    } 
    else {
      return '${value}'
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime)
  } 

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
}