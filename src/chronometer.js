class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0 ;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    setInterval((intervalId) =>{this.currentTime++},1000)
    if(printTimeCallback === true){
      return  printTimeCallback(()=>{},1000)} 
  }
  

  getMinutes() {
    // ... your code goes here
   return Math.floor(this.currentTime /60) ; 
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
   
  }

  stop() {
    // ... your code goes here
  clearInterval(this.currentTime)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0  
  }

  split() {
    // ... your code goes here
  }
}
