class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {

    
    setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      }
      
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {

  if(this.currentTime === 0){
    return 0;
  }else{
    return this.currentTime % 60
  }
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return (`0${value}`)
    }else{
      return (`${value}`)
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return(this.currentTime = 0)
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
  }
}
