class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null;
  }

  start(printTimeCallback){
    this.intervalId = setInterval(() => {if(printTimeCallback){printTimeCallback()}; this.currentTime++}, 1000)}
  
  getMinutes() {
    // ... your code goes 
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes 
    
    if (value < 10){
      return `0${value}`
    }
    else{
      return `${value}`
    }
  }

  stop() {
    // ... your code goes here
    
      clearInterval(this.intervalId);
    
    
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
