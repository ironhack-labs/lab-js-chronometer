class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    
    this.intervalId = setInterval( () => {
      this.currentTime ++;
      if(printTimeCallback) {
        printTimeCallback()
      }
      return;
    },1000)
  }
  
  getMinutes() {
    // ... your code goes here
    let minutesPassed = Math.floor(this.currentTime/60)
    return minutesPassed
  }

  getSeconds() {
    // ... your code goes here
    let secondsPassed = Math.floor(this.currentTime%60)
    return secondsPassed
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value.toString().length===2){
      return value.toString()
    }
    return value.toString().padStart(2,'0')
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minute}:${seconds}`
  }
}
