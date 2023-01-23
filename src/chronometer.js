class Chronometer {
  constructor() {
    
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    // ... your code goes here
    
       this.intervalId = setInterval (() => {

          this.currentTime ++;

          if (printTimeCallback){
            printTimeCallback()
          }

      }, 1000)
      
     
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor (this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60 ;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value.length === 1){
      this.value1 = `0${value.slice(0,0)}`
      return this.value1;
    } else if(value.length === 2){
       this.value2 = `${value.slice(0,1)}`
      return this.value2;
    }
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


