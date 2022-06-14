class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    // this.internalId = setInterval(() => {
    //   this.currentTime += 1;
    //   if (arguments.length > 0 && typeof printTimeCallback == 'function') {
    //     printTimeCallback()
    //   }
    // }, 1000)
    this.internalId = setInterval(() => {
      this.currentTime += 1;
      if (arguments.length > 0 && typeof printTimeCallback == 'function') {
        printTimeCallback()
      }
    }, 10)
    // centa seconds not millliseconds
  }
  getMilliseconds() {
    return this.currentTime % 100
  }

  getMinutes() {
    // ... your code goes here
    // return Math.floor(this.currentTime / 60) 
    return Math.floor((this.currentTime / 6000));
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime / 100) % 60;
    // let date = new Date(this.currentTime);
    // return date.getSeconds()
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // if ((value + '').length < 2) {
    //     return '0' + value;
    // } else {
    //   return value + ''
    // }
    // if ((value + '').length < 2) {
    //   return '0' + value;
    // } else if ((value + '').length === 2) {
    //   return value + ''
    // }
    // else {
    //   return (value + '')[0] + (value + '')[2]
    // }
    if (value < 10) {
      return '0' + value;
    } else {
      return String(value);
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.internalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());


    // return minutes + ':' + seconds + ':' + milliseconds
    return minutes + ':' + seconds
    // milliseconds seems to already print out on the split wihout being coded in for some reason, as well as the function computeTwoDigitNumber doesn't seem to convert to two digits for milliseconds(value)
  }

}
let test = new Chronometer()
console.log(test.split())

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
