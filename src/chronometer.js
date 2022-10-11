class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
     

    setInterval(() => {
      this.currentTime += 1
      
      console.log(this)
      if (typeof printTimeCallback == "function") {
      printTimeCallback()}
    },1000)
    // ... your code goes here
  }

  getMinutes() {
    this.currentTime
    return Math.floor(this.currentTime/60)
    // ... your code goes here
  }

  getSeconds() {
    this.currentTime
    return Math.floor(this.currentTime % 60)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let paddedNumber = ("0" + value).slice(-2);
  return paddedNumber;
    // ... your code goes here
  }

  stop() {
//    if (this.intervalId) {
      clearInterval(this.intervalId)
 //   }
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
