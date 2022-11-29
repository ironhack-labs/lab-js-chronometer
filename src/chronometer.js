class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }
//method iteration 2

   start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
      this.currentTime ++;
    if(typeof printTimeCallback ==="function"){
        printTimeCallback();
} },1000);

  }

  getMinutes() {
    // ... your code goes here
   return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
     return String("00" + value).slice(-2); // convert value to a string, then count from the back using negative slice, so that it is always 2 digit .
      // Another alternate way to add zeros to the front of your number. 
      //Note: everything is in string.
      
      //return value.toString().padStart(2,"0");  
    }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
    
  }
}
