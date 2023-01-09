class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
  this.intervalId = setInterval( () => {
    this.currentTime ++ 
    if(printTimeCallback) return printTimeCallback()
  }, 1000)
    // ... your code goes here
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60)
    
    // ... your code goes here
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return '0' + value.toString()
    }  
    return value.toString() 
    // ... your code goes here
  }

  stop() {
    return clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    return this.currentTime = 0
    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
    // ... your code goes here
  }
}
