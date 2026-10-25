class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    const intervalSegs = setInterval( () => {
      this.currentTime += 1
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
    this.intervalId = intervalSegs
  }
  
  getMinutes() {
    // ... your code goes here
    let minutes = 0
    minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }
  
  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = ("0" + value).slice(-2)
    
    return string
  }
  
  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
