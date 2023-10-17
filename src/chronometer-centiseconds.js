class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0,
    this.intervalId=null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      if(printTimeCallback){printTimeCallback();} 
      this.currentTime++},10)
  }

  getMinutes() {
    // ... your code goes here
    
    let minutes = Math.floor(this.currentTime/6000);

    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime%6000)/100
    let formedSecods = seconds.toString().slice(0,2)

    return parseInt(formedSecods)
  }

  getCentiseconds() {
    // ... your code goes here
    let centiseconds =this.currentTime%100

    return centiseconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let valueToReturn = "";
    let toWork=value.toString();
    if(value===0){valueToReturn = "00"}
    else if (toWork.length === 1) {valueToReturn = "0" + toWork}
    else if (toWork.length === 2) {valueToReturn = toWork.slice(0,2)}

    return valueToReturn
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    // ... your code goes here
    let output = (this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())+"."+this.computeTwoDigitNumber(this.getCentiseconds()))
    return output
  }
}
