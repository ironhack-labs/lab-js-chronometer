class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime+=1
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let str = `${value}`
    if(str.length>1){
      return str
    }else{
      return`0${str}`
    }
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
    // let minutes = this.getMinutes()
    // let seconds = this.getSeconds()
    // let secs = this.computeTwoDigitNumber(minutes)
    // let mins = this.computeTwoDigitNumber(seconds)
    // return `${mins}:${secs}` 
  }
}
