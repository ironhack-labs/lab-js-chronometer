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
      },10)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 6000)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let sec = Math.floor(this.currentTime % 6000 /100)
    return sec
  }

  getCentiseconds() {
    // ... your code goes here
    let centisec = this.currentTime % 100
    return centisec
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return `0${value}`
    }else if(value >= 10){ return`${value}`}
    else if(value > 99){return "00"}
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
    let splitTime = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
    return splitTime
  }
}
