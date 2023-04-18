
class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback()
      }
    },1000)
   // return intervalId
  }
  

  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }
  

  getSeconds() {
   return this.currentTime % 60
  }
  
  computeTwoDigitNumber(value) {
    const numberString = value.toString();

    if(numberString.length === 2){
      return numberString
    }else{
      return "0"+numberString
    }
  }
  
  stop() {
    clearInterval(this.intervalId)
  }
  
  reset() {
    // ... your code goes here
  }
  
  split() {
    // ... your code goes here
  }
}
