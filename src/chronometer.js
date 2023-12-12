class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === "function") {
        printTimeCallback()
      }
      return (this.currentTime ++);
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }

  computeTwoDigitNumber(value){
    // ... your code goes here
    let myValue = value.toString()
    if (myValue.length === 1){
      return "0"+ value
    }
    else{
      return myValue
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutesString = this.computeTwoDigitNumber(this.getMinutes())
    let secondsString = this.computeTwoDigitNumber(this.getSeconds())
    let minutesAndSeconds= minutesString + ":" + secondsString
    return minutesAndSeconds
  }
}

