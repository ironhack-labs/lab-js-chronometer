class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    const intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    formatedNumber = value.toString();
    if (formatedNumber.length === 1) {
      formatedNumber = "0" + formatedNumber
    }
    return formatedNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);

    // this.intervalId = clearInterval(this.intervalId)
    // this.start(this.clearInterval())
    
  }



  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes);
    let seconds = this.computeTwoDigitNumber(this.getSeconds);

    let split = minutes+":"+seconds;

    return split.toString();

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
