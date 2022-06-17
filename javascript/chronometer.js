class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
    
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    this.currentTime += 1 
    if (printTimeCallback){
    printTimeCallback()
    }
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
      return '0' + value
    }
    else {
      return "" + value
    }
  }

  stop() {
    // ... your code goes here
    clearInterval (this.intervalId)
  }

  reset() {
    // ... your code goes here
    console.log('reset')
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let mm = this.computeTwoDigitNumber(this.getMinutes())
    let ss = this.computeTwoDigitNumber(this.getSeconds())
    return `${mm}:${ss}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
