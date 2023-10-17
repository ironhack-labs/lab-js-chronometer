
class Chronometer {
  
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }
  
  
  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval (()=> {
     this.currentTime++
      if (printTimeCallback){
        printTimeCallback()
      }
    },1000) 
  }
  

  getMinutes() {
    // ... your code goes here
    const toMinutes = this.currentTime * 0.016667
    return  Math.floor (toMinutes)

  }

  getSeconds() {
    const toSeconds = this.currentTime 
    if (this.currentTime < 60)
    return  Math.floor (toSeconds)

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
