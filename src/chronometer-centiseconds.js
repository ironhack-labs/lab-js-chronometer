class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {this.currentTime++;
      // ... your code goes here
      
      if (typeof printTimeCallback === 'function')
        printTimeCallback()
      }, 10)
    
    // ... your code goes here
  }

  getMinutes() {

    let minutes = this.currentTime

    return Math.floor (minutes)
    // ... your code goes here
  }

  getSeconds() {
    let seconds = this.currentTime 
   
    return Math.floor (seconds)
    // ... your code goes here
  }

  getCentiseconds() {
    
    let centiseconds = this.currentTime 
   
    return Math.floor (centiseconds)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2,"0");
    // ... your code goes here
  }

  stop() {
    return clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
