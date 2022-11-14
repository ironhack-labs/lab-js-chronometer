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
    }, 1000)

    
      
  }

  getMinutes() {

    let minutes = this.currentTime/60

    return Math.floor (minutes)
   
    // ... your code goes here
  }

  getSeconds() {

    let seconds = this.currentTime % 60
    // ... your code goes here
    return Math.floor (seconds)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    
    // value = ""
    return String(value).padStart(2,"0");
    
    
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {

   
    // ... your code goes here
  }
}
