class Chronometer { 
  constructor() {
  this.currentTime = 0;
    this.intervalId = null; 
    
  }

  start(printTimeCallback) {
    this.intervalId =
     setInterval(() => {
    this.currentTime++
    if (printTimeCallback) {
      printTimeCallback()
    }
  }, 1000)


    
    
      
      
      
    

  }

  getMinutes() {
    
   return Math.floor( this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime %60
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1)
      return ("0" + value)
    else {
      return value.toString()
    }
  }

  stop() {
    
    return clearInterval( this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
        return   `${minutes}:${seconds}`
  }
}
