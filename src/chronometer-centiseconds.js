class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.currentTime += 1
      if (typeof printTimeCallback == "function") {
      printTimeCallback()}
    },10)
    // ... your code goes here
  }

  getMinutes() {
    this.currentTime
    return Math.floor(this.currentTime/6000)
    // ... your code goes here
  }

  getSeconds() {
    this.currentTime
    return Math.floor(this.currentTime/100 % 60)
    // ... your code goes here
  }

  getCentiseconds() {
    this.currentTime
    return Math.floor(this.currentTime % 100)
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
    // ... not sure why the commented-out conditional doesn't work
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    return `${getMinutes()} + ":" + ${getSeconds()}`
    // ... your code goes here
  }
}
