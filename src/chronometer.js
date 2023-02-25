class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback()
      }
      }, 1000);

  }

  getMinutes() {
   return Math.floor(this.currentTime/ 60);

    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let num = value.toString()
    if (value <10){ 
      
      return `0` + num;
    }else { 
      return num;
    }

  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    
     


    // ... your code goes heres
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {

    let min= this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    return  (min +`:`+ sec);
    // ... your code goes here
  }
  
}
