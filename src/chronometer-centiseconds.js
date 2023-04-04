class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if(printTimeCallback){
        printTimeCallback()
      }

      this.currentTime++
    }, 10);
  }

  getMinutes() {
    // ... your code goes here

    let minutes =  Math.floor(this.currentTime/6000)
    return minutes

  }

  getSeconds() {
    // ... your code goes here
    let seconds =Math.floor((this.currentTime/100)%60)
    return seconds
  }

  getCentiseconds() {
    // ... your code goes here
    let centiseconds = this.currentTime%100
    return centiseconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value.toString().length === 1){
      return `0${value}`
    }
    return value.toString()
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0

  }

  split() {
    // ... your code goes here
   
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  
  }
}
