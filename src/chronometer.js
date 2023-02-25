
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    
    
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{this.currentTime++;
    if(printTimeCallback !== undefined) {printTimeCallback()}
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
    
  }

  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60
    return sec
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return `0${value}`
    }else if(value >= 10){ return`${value}`}
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
    let splitTime = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    return splitTime
  }


}
