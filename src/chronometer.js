class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++;
      
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let numberOfMinutes = Math.round(Math.floor(this.currentTime / 60))
    return numberOfMinutes
  }

  getSeconds() {
    // ... your code goes here
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
     // Ensure the value is an integer.
     const number = parseInt(value);

     if (number < 10) {
       return `0${number}`;
     } else {
       return `${number}`;
     }
   
  }

  stop() {
    // ... your code goes here
   if (stop) {
    clearInterval(this.intervalId)
   
   }
    
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutesStr = this.computeTwoDigitNumber(this.getMinutes());
    const secondsStr = this.computeTwoDigitNumber(this.getSeconds());

   
    return `${minutesStr}:${secondsStr}`;
  }
}
