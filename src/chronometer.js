class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  
    // ... your code goes here
  }

  start(printTimeCallback) {
     this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback(); 
      }}, 1000);
    
  }
    // ... your code goes here
  
  

  getMinutes() {
    let numberofMinutes = Math.floor(this.currentTime/60);
    return numberofMinutes;
    // ... your code goes here
  }

  getSeconds() {

    let numberofSeconds = this.currentTime % 60;
    return numberofSeconds;
   
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {

    value = this.currentTime    
    const string = value.toString;
    string.padStart(2,"0");

      return ;
    // ... your code goes here

  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    this.currentTime= 0;
  }

  split() {

    // ... your code goes here
  }
}
