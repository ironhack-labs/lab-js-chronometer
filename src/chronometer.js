class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (!printTimeCallback){
      this.intervalId = setInterval(() => {
        this.currentTime += 1
      }, 1000);
    } 

    else {
      this.intervalId = setInterval(() => {
        printTimeCallback ()
      }, 1000);
    }
    }
    

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (JSON.stringify(value).length !== 2){
      return "0"+value
    }
      return JSON.stringify(value)
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    
  }
}
