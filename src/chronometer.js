class Chronometer {
  constructor() {
//should initialize two properties for each new chronometer object
  this.currentTime = 0
  this.intervalId = null
  }

  start(printTimeCallback) {

//should increment by 1 the currentTime property on every 1 second interval
    this.intervalId = setInterval(()=>{
      this.currentTime++
//should invoke the passed argument (printTimeCallback) every 1 second
      if(printTimeCallback){
        printTimeCallback()}
    },1000)
  }

  getMinutes() {

// To calculate the minutes, divide the current time by 60 and use the Math.floor() method to get a rounded number.
    return Math.floor(this.currentTime/60) 

  }

  getSeconds() {
//return the number of seconds that have passed after the start of the current minute - using the modulo operator (current time % 60) to get the number of remaining seconds
    return Math.floor(this.currentTime%60) 
  }

  computeTwoDigitNumber(value) {
//taking value as argument above we are returning a string with two digits (by string concatenation step)
    return ("0" + value).slice(-2)
  }

  stop() {

// stops the interval
    clearInterval(this.intervalId)
    
  }

  reset() {

    //reset the current time property to 0
    this.currentTime = 0
  }

  split() {
 
//Declare and initialize the minutes and seconds

let minutes = this.computeTwoDigitNumber(this.getMinutes())
let seconds = this.computeTwoDigitNumber(this.getSeconds())

//Return value formatted as "mm:ss"
return `${minutes}:${seconds}`

  }
}
