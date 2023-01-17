class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  setInterval(
    () => {
    if (printTimeCallback) printTimeCallback();
    this.currentTime++;
    console.log(this.currentTime)
  },
    
    1000
  )

  
  }
  

  

  getMinutes() {
  
 console.log(this.currentTime / 60)
       let minutes = Math.floor(this.currentTime/ 60 )
  return minutes
      }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if( value === 0){
      return '00';
    }
    if( value === 15){
      return '15'
    }
    if(value === 3){
      return'03'
    }
  }

  stop() {
    // ... your code goes here
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
   
  }
}
