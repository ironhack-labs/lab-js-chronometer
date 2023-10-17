class Chronometer {
  constructor() {
    // ... your code goes herez
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime ++

    },1000)

  }

  getMinutes() {
    // ... your code goes here
let minutes = 0
minutes = Math.floor(this.currentTime/60)
return minutes
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }
/* if     (this.currentTime === 0) {
  return 0
}
let seconds = 0
    seconds = minutes % 60
    return seconds

  } */

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value<10){
      return "0"+ value
    } else {
      return `${value}`
   }
   

  }

  stop() {
    // ... your code goes here
      clearInterval(this.intervalId);

  }


   
  


  reset() {
    // ... your code goes here
    this.currentTime=0

  }

  split() {
    // ... your code goes here
  }
}
