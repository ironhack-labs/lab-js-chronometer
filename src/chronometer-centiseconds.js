class Chronometer {  
  constructor() {
  //should initialize two properties for each new chronometer object
    this.currentTime = 0
    this.intervalId = null
}

  start(printTimeCallback) {
    // Set the interval to increment currentTime and invoke printTimeCallback
   this.intervalId = setInterval(()=>{
    this.currentTime++ // Incrementing currentTime by 1

// Invoke the callback function
    if(printTimeCallback){
      printTimeCallback()
    }
// Stop the interval after 200 increments (which should be after 2 seconds)
   if(this.currentTime>=200){
    clearInterval(this.intervalId)
   }
   // Set the interval to 10 milliseconds (0.01 seconds)
  },10)
}

  getMinutes() {
// To calculate the minutes, divide the current time by 6000 and use the Math.floor() method to get a rounded number.
    return Math.floor(this.currentTime/6000) 
  }

  getSeconds() {

//return the number of seconds that have passed after the start of the current minute - using the modulo operator (current time % 60) to get the number of remaining seconds
return Math.floor((this.currentTime%6000)/100) 
}

  getCentiseconds() {
   // Calculate the number of centiseconds within the current second
   return this.currentTime % 100; 
  }

  computeTwoDigitNumber(value) {
 //taking value as argument above we are returning a string with two digits (by string concatenation step)
 return ("0" + value).slice(-2)
  }

  stop() {

    clearInterval(this.intervalId)
  }

  reset() {
  //reset the current time property to 0
    this.currentTime = 0
  }
  split() {
    
let minutes = this.computeTwoDigitNumber(this.getMinutes())
let seconds = this.computeTwoDigitNumber(this.getSeconds())
let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())

//Return value formatted as "mm:ss.cs"
return `${minutes}:${seconds}.${centiseconds}`

  }
  }

