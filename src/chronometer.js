class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
  
      
    },1000);
    
  }

  getMinutes() {
    
    return Math.floor(this.currentTime / 60);
    
  }
  getSeconds() {
   if(this.getMinutes() % 60 === 0){
    return this.currentTime;
   } else {
    return this.currentTime;
   }
    

  }

  computeTwoDigitNumber(value) {
   console.log(value)
    if(value < 10){
      return '0' + value;
    } 
    
    //return String(value);
   return value.toString();

  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}



