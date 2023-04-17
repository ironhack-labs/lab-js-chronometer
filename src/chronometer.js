class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
   // ... your code goes here
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(()=>{
      this.currentTime ++; 
      if(printTimeCallback){  
      printTimeCallback();}
    },1000)
   
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
   
    // ... your code goes here
  }

  getSeconds() {
   return this.currentTime %60;
  }

  computeTwoDigitNumber(value) {
    if(value === 0){
  return "0"+value.toString();

    }else if (value < 9){
      return "0"+value.toString();
    }else { 
      return value.toString()}
    
    
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
   return this.currentTime = 0; // ... your code goes here
  }

  split() {
   return this.computeTwoDigitNumber(this.getMinutes())+ ":" + this.computeTwoDigitNumber(this.getSeconds())  // ... your code goes here
  }
}
