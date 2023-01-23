class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      console.log(this.currentTime); 
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback()
      }
    }, 1000);

  };
  

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
   
   }
   


  getSeconds() {
    // ... your code goes here
    if(this.currentTime % 60 !== 0){
    return this.currentTime % 60;
    } else (this.currentTime === 0)
    return 0;
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here´
   if( value < 10){
    return `0${value}`;

   } else 
   return `${value}`;

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
   let mm = this.computeTwoDigitNumber(this.getMinutes());
   let ss = this.computeTwoDigitNumber(this.getSeconds());
   return `${mm}:${ss}`;
  }
}
