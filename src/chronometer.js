class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      if(printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++

    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
}

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
   if (value < 10) {
    return '0'+value;
   }
   else {
    return `${value}`;
   }
  
   }
  
// usar el clear interval method!!!
  stop() {
   return clearInterval(this.currentTime);
    
  }

  reset() {
   return this.currentTime = 0;
  }





  
  split() {
    // ... your code goes here
  }
}
