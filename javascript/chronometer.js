class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
   const interval = setInterval(() => {
      this.currentTime += 1;
  
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
        
    }, 1000)
    this.intervalId = interval
  }

  getMinutes() {
    // ... your code goes here
    // console.log(this.currentTime)
    // console.log(this.)
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime % 60);
    return seconds
    // console.log(this.currentTime)

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueString = value.toString()
    if(valueString.length > 1) {
      return valueString;
    } else {
      return `0${valueString}`
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    // console.log(this.computeTwoDigitNumber(this.getMinutes()))
    let timeStampSeconds = this.computeTwoDigitNumber(this.getSeconds())
    let timeStampMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let timeStamp = `${timeStampMinutes}:${timeStampSeconds}`;
    return timeStamp
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
