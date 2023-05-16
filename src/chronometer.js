class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    this.currentTime +=1;
    if (printTimeCallback) {
      printTimeCallback();
    } 
}, 1000)
  }

  getMinutes() {
  // 1- calculate how minutes have elapsed - 2 divide the currentTime / 60 + mathfloor method
return Math.floor(this.currentTime / 60);  
}

  getSeconds() {
    this.seconds = 0
    // module operator (current time % 60)
    return this.currentTime % 60; }
    

  computeTwoDigitNumber(value) {
    let twoDigit = value.toString() // turn a number to a string
  if (value < 10 ) {
    return "0" + twoDigit
  }
  else {
    return twoDigit
  }
  }


  stop() {
    // clearInterval
  clearInterval(this.intervalId)
  }

  reset() {
    // currentTime = 0
  this.currentTime = 0
}

  split() {
    // creating 2 variables to store the minutes and the seconds + returning with backticks
 const minutes = this.computeTwoDigitNumber(this.getMinutes());
 const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
}
}