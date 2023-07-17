class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
     this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
     
     
      this.intervalId = setInterval(() => {  
      this.currentTime ++
      if (printTimeCallback) {
        printTimeCallback()
      }
      
    }, 10)
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000)
  }


  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime/100)%60)
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    {
      // ... your code goes here
      
      if ( value > 9) {
        return value.toString()
      } else {
        return "0" + value
      }
    }
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
    
      let mins = this.computeTwoDigitNumber(this.getMinutes())
      let secs = this.computeTwoDigitNumber(this.getSeconds())
      let centSec = this.computeTwoDigitNumber(this.getCentiseconds())
      return `${mins}:${secs}.${centSec}`
      // ... your code goes here
    
  }
}
