class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;   
  }

  start(printTimeCallback) {    
    
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if(typeof printTimeCallback === "function"){
        printTimeCallback();
      }

    }, 1000)

  }

  getMinutes() {

    let minutes = this.currentTime/60;
    return Math.floor(minutes);   
     
  }

  getSeconds() {

    let seconds = this.currentTime%60;
    return seconds;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
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
